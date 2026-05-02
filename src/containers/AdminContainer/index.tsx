'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import * as S from './style';
import type { Bulletin, ContentCategory, MonthlySummary } from '@/types/content';
import { formatKstDate } from '@/lib/dateTimeKst';

const documentTabs: Array<{ key: ContentCategory; label: string; formTitle: string; placeholder: string; emptyText: string }> = [
  {
    key: 'bulletin',
    label: '주보',
    formTitle: '주보 등록',
    placeholder: '예: 2026년 3월 첫째 주 주보',
    emptyText: '등록된 주보가 없습니다.',
  },
  {
    key: 'sharing_worship',
    label: '나눔으로 드리는 예배',
    formTitle: '나눔으로 드리는 예배 등록',
    placeholder: '예: 2026년 4월 26일 나눔으로 드리는 예배',
    emptyText: '등록된 나눔으로 드리는 예배 자료가 없습니다.',
  },
  {
    key: 'pastoral_letter',
    label: '목양편지',
    formTitle: '목양편지 등록',
    placeholder: '예: 2026년 4월 26일 목양편지',
    emptyText: '등록된 목양편지가 없습니다.',
  },
];

type AdminTab = ContentCategory | 'monthly';

export default function AdminContainer() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>('bulletin');
  const [bulletins, setBulletins] = useState<Bulletin[]>([]);
  const [monthlySummaries, setMonthlySummaries] = useState<MonthlySummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isUploadingBulletinFile, setIsUploadingBulletinFile] = useState(false);
  const [selectedBulletinFile, setSelectedBulletinFile] = useState<File | null>(null);
  const [editingBulletinId, setEditingBulletinId] = useState<string | null>(null);
  const [editingMonthlySummaryId, setEditingMonthlySummaryId] = useState<string | null>(null);

  const [bulletinForm, setBulletinForm] = useState({
    title: '',
    content_category: 'bulletin' as ContentCategory,
    week_start_date: '',
    service_type: '',
    file_path: '',
    is_latest: true,
  });

  const [monthlySummaryForm, setMonthlySummaryForm] = useState({
    month_key: '',
    content: '',
  });

  const activeDocumentTab = documentTabs.find((tab) => tab.key === activeTab);
  const visibleDocuments = activeDocumentTab
    ? bulletins.filter((item) => item.content_category === activeDocumentTab.key)
    : [];

  useEffect(() => {
    let mounted = true;

    const fetchAdminData = async () => {
      try {
        const [bulletinRes, monthlyRes] = await Promise.all([
          fetch('/api/admin/bulletins', { cache: 'no-store' }),
          fetch('/api/admin/monthly-summaries', { cache: 'no-store' }),
        ]);

        if (!mounted) return;

        if (bulletinRes.status === 401 || monthlyRes.status === 401) {
          router.replace('/admin/login');
          return;
        }

        if (!bulletinRes.ok || !monthlyRes.ok) {
          const bulletinError = bulletinRes.ok ? null : await bulletinRes.json().catch(() => ({ error: 'failed bulletins' }));
          const monthlyError = monthlyRes.ok ? null : await monthlyRes.json().catch(() => ({ error: 'failed monthly summaries' }));
          setMessage(`목록 조회 실패: ${bulletinError?.error || ''} ${monthlyError?.error || ''}`.trim());
          return;
        }

        const bulletinJson = await bulletinRes.json() as { bulletins?: Bulletin[] };
        const monthlyJson = await monthlyRes.json() as { monthlySummaries?: MonthlySummary[] };
        setBulletins(bulletinJson.bulletins || []);
        setMonthlySummaries(monthlyJson.monthlySummaries || []);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchAdminData();

    return () => {
      mounted = false;
    };
  }, [router]);

  const onBulletinSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    if (!bulletinForm.file_path) {
      setMessage('파일을 먼저 업로드해 주세요.');
      return;
    }

    const payload = {
      ...bulletinForm,
      content_category: activeDocumentTab?.key ?? bulletinForm.content_category,
      ...(editingBulletinId ? { id: editingBulletinId } : {}),
    };

    const response = await fetch('/api/admin/bulletins', {
      method: editingBulletinId ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const json = await response.json() as { bulletin?: Bulletin; error?: string };
    if (!response.ok) {
      setMessage(`자료 저장 실패: ${json.error || 'unknown error'}`);
      return;
    }

    if (json.bulletin) {
      if (editingBulletinId) {
        setBulletins((prev) => prev.map((item) => (item.id === editingBulletinId ? json.bulletin! : item)));
      } else {
        setBulletins((prev) => [json.bulletin!, ...prev]);
      }
    }
    setEditingBulletinId(null);
    setSelectedBulletinFile(null);
    setBulletinForm({
      title: '',
      content_category: activeDocumentTab?.key ?? 'bulletin',
      week_start_date: '',
      service_type: '',
      file_path: '',
      is_latest: true,
    });
    setMessage(editingBulletinId ? '자료가 수정되었습니다.' : '자료가 등록되었습니다.');
  };

  const onUploadBulletinFile = async () => {
    if (!selectedBulletinFile) {
      setMessage('업로드할 파일을 먼저 선택해 주세요.');
      return;
    }

    setIsUploadingBulletinFile(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('file', selectedBulletinFile);
      formData.append('content_category', activeDocumentTab?.key ?? bulletinForm.content_category);

      const response = await fetch('/api/admin/bulletins/upload', {
        method: 'POST',
        body: formData,
      });

      const json = await response.json().catch(() => ({} as { error?: string; filePath?: string }));
      if (!response.ok || !json.filePath) {
        setMessage(`파일 업로드 실패: ${json.error || 'unknown error'}`);
        return;
      }

      setBulletinForm((prev) => ({ ...prev, file_path: json.filePath! }));
      setMessage('파일 업로드 완료. 등록 버튼을 눌러 저장해 주세요.');
    } finally {
      setIsUploadingBulletinFile(false);
    }
  };

  const onMonthlySummarySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    if (!monthlySummaryForm.month_key || !monthlySummaryForm.content.trim()) {
      setMessage('월간의 대상 월과 내용을 입력해 주세요.');
      return;
    }

    const payload = {
      ...monthlySummaryForm,
      content: monthlySummaryForm.content.trim(),
      ...(editingMonthlySummaryId ? { id: editingMonthlySummaryId } : {}),
    };

    const response = await fetch('/api/admin/monthly-summaries', {
      method: editingMonthlySummaryId ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const json = await response.json() as { monthlySummary?: MonthlySummary; error?: string };
    if (!response.ok) {
      setMessage(`월간 저장 실패: ${json.error || 'unknown error'}`);
      return;
    }

    if (json.monthlySummary) {
      if (editingMonthlySummaryId) {
        setMonthlySummaries((prev) => prev.map((item) => (item.id === editingMonthlySummaryId ? json.monthlySummary! : item)));
      } else {
        setMonthlySummaries((prev) => [json.monthlySummary!, ...prev]);
      }
    }

    setEditingMonthlySummaryId(null);
    setMonthlySummaryForm({
      month_key: '',
      content: '',
    });
    setMessage(editingMonthlySummaryId ? '월간 정보가 수정되었습니다.' : '월간 정보가 등록되었습니다.');
  };

  const onLogout = async () => {
    await signOut({ callbackUrl: '/admin/login' });
  };

  const onEditBulletin = (bulletin: Bulletin) => {
    setActiveTab(bulletin.content_category);
    setEditingBulletinId(bulletin.id);
    setBulletinForm({
      title: bulletin.title,
      content_category: bulletin.content_category,
      week_start_date: bulletin.week_start_date,
      service_type: bulletin.service_type || '',
      file_path: bulletin.file_path,
      is_latest: bulletin.is_latest,
    });
    setMessage('자료 수정 모드입니다. 내용 수정 후 저장하세요.');
  };

  const onDeleteBulletin = async (id: string) => {
    if (!window.confirm('이 자료를 삭제할까요?')) return;
    const response = await fetch(`/api/admin/bulletins?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    const json = await response.json().catch(() => ({} as { error?: string }));
    if (!response.ok) {
      setMessage(`자료 삭제 실패: ${json.error || 'unknown error'}`);
      return;
    }
    setBulletins((prev) => prev.filter((item) => item.id !== id));
    setMessage('자료가 삭제되었습니다.');
  };

  const onEditMonthlySummary = (summary: MonthlySummary) => {
    setActiveTab('monthly');
    setEditingMonthlySummaryId(summary.id);
    setMonthlySummaryForm({
      month_key: summary.month_key,
      content: summary.content,
    });
    setMessage('월간 정보 수정 모드입니다. 내용 수정 후 저장하세요.');
  };

  const onDeleteMonthlySummary = async (id: string) => {
    if (!window.confirm('이 월간 정보를 삭제할까요?')) return;
    const response = await fetch(`/api/admin/monthly-summaries?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    const json = await response.json().catch(() => ({} as { error?: string }));
    if (!response.ok) {
      setMessage(`월간 정보 삭제 실패: ${json.error || 'unknown error'}`);
      return;
    }
    setMonthlySummaries((prev) => prev.filter((item) => item.id !== id));
    setMessage('월간 정보가 삭제되었습니다.');
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>관리자 페이지</S.Title>
        <S.Description>백엔드 API 기반으로 주보, 교회 생활 자료, 월간 정보를 등록/조회합니다.</S.Description>
        <S.HeaderAction type="button" onClick={onLogout}>로그아웃</S.HeaderAction>
      </S.Header>

      <S.TabRow>
        {documentTabs.map((tab) => (
          <S.TabButton
            key={tab.key}
            type="button"
            $active={activeTab === tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setEditingBulletinId(null);
              setSelectedBulletinFile(null);
              setBulletinForm({
                title: '',
                content_category: tab.key,
                week_start_date: '',
                service_type: '',
                file_path: '',
                is_latest: true,
              });
            }}
          >
            {tab.label} 관리
          </S.TabButton>
        ))}
        <S.TabButton
          type="button"
          $active={activeTab === 'monthly'}
          onClick={() => setActiveTab('monthly')}
        >
          월간 관리
        </S.TabButton>
      </S.TabRow>

      {activeDocumentTab && (
        <S.Panel>
          <S.SectionTitle>{activeDocumentTab.formTitle}</S.SectionTitle>
          <S.Form id="bulletin-form" onSubmit={onBulletinSubmit}>
            <S.FormGrid>
              <S.Field>
                <label htmlFor="bulletin-title">제목</label>
                <input
                  id="bulletin-title"
                  placeholder={activeDocumentTab.placeholder}
                  value={bulletinForm.title}
                  onChange={(event) => setBulletinForm((prev) => ({ ...prev, title: event.target.value }))}
                  required
                />
              </S.Field>
              <S.Field>
                <label htmlFor="bulletin-date">주차 날짜</label>
                <input
                  id="bulletin-date"
                  type="date"
                  value={bulletinForm.week_start_date}
                  onChange={(event) => setBulletinForm((prev) => ({ ...prev, week_start_date: event.target.value }))}
                  required
                />
              </S.Field>
              <S.Field>
                <label htmlFor="bulletin-service">구분 메모</label>
                <input
                  id="bulletin-service"
                  placeholder="예: 주일 1-3부 예배"
                  value={bulletinForm.service_type}
                  onChange={(event) => setBulletinForm((prev) => ({ ...prev, service_type: event.target.value }))}
                />
              </S.Field>
              <S.Field>
                <label htmlFor="bulletin-file">파일 업로드</label>
                <input
                  id="bulletin-file"
                  type="file"
                  accept="application/pdf,image/*"
                  onChange={(event) => setSelectedBulletinFile(event.target.files?.[0] ?? null)}
                />
                <S.UploadRow>
                  <button type="button" onClick={onUploadBulletinFile} disabled={isUploadingBulletinFile}>
                    {isUploadingBulletinFile ? '업로드 중...' : '파일 업로드'}
                  </button>
                  <span>{bulletinForm.file_path || '아직 업로드된 파일이 없습니다.'}</span>
                </S.UploadRow>
              </S.Field>
            </S.FormGrid>
          </S.Form>

          <S.ActionRow>
            <button type="submit" className="primary" form="bulletin-form">
              {editingBulletinId ? '자료 수정 저장' : `${activeDocumentTab.label} 등록`}
            </button>
          </S.ActionRow>

          <S.SectionTitle>등록된 {activeDocumentTab.label}</S.SectionTitle>
          {message && <S.Message>{message}</S.Message>}
          {isLoading ? (
            <S.Message>자료 불러오는 중...</S.Message>
          ) : visibleDocuments.length === 0 ? (
            <S.Message>{activeDocumentTab.emptyText}</S.Message>
          ) : (
            <S.List>
              {visibleDocuments.map((bulletin) => (
                <S.ListItem key={bulletin.id}>
                  <S.ListTag>{bulletin.is_latest ? '최신' : activeDocumentTab.label}</S.ListTag>
                  <S.ListTitle>{bulletin.title}</S.ListTitle>
                  <S.ListMeta>
                    {formatKstDate(bulletin.week_start_date)} · {bulletin.service_type ?? '예배 정보 없음'}
                  </S.ListMeta>
                  <S.ItemActions>
                    <button type="button" onClick={() => onEditBulletin(bulletin)}>수정</button>
                    <button type="button" onClick={() => onDeleteBulletin(bulletin.id)}>삭제</button>
                  </S.ItemActions>
                </S.ListItem>
              ))}
            </S.List>
          )}
        </S.Panel>
      )}

      {activeTab === 'monthly' && (
        <S.Panel>
          <S.SectionTitle>월간 정보 등록</S.SectionTitle>
          <S.Form id="monthly-form" onSubmit={onMonthlySummarySubmit}>
            <S.FormGrid>
              <S.Field>
                <label htmlFor="monthly-key">대상 월</label>
                <input
                  id="monthly-key"
                  type="month"
                  value={monthlySummaryForm.month_key}
                  onChange={(event) => setMonthlySummaryForm((prev) => ({ ...prev, month_key: event.target.value }))}
                  required
                />
              </S.Field>
              <S.Field className="full">
                <label htmlFor="monthly-content">월간 내용</label>
                <textarea
                  id="monthly-content"
                  rows={8}
                  placeholder="예시)\n3일 | 어린이주일 / 전 교인 성경공부 15강\n15일-17일 | 전 교인 말씀 부흥회"
                  value={monthlySummaryForm.content}
                  onChange={(event) => setMonthlySummaryForm((prev) => ({ ...prev, content: event.target.value }))}
                  required
                />
              </S.Field>
            </S.FormGrid>
          </S.Form>

          <S.ActionRow>
            <button type="submit" className="primary" form="monthly-form">
              {editingMonthlySummaryId ? '월간 수정 저장' : '월간 등록'}
            </button>
          </S.ActionRow>

          <S.SectionTitle>등록된 월간 정보</S.SectionTitle>
          {message && <S.Message>{message}</S.Message>}
          {isLoading ? (
            <S.Message>월간 정보 불러오는 중...</S.Message>
          ) : monthlySummaries.length === 0 ? (
            <S.Message>등록된 월간 정보가 없습니다.</S.Message>
          ) : (
            <S.List>
              {monthlySummaries.map((summary) => (
                <S.ListItem key={summary.id}>
                  <S.ListTag>{summary.month_key}</S.ListTag>
                  <S.ListTitle>{summary.month_key} 월간 일정</S.ListTitle>
                  <S.ListMeta>{formatKstDate(summary.published_at || new Date().toISOString())}</S.ListMeta>
                  <S.ItemActions>
                    <button type="button" onClick={() => onEditMonthlySummary(summary)}>수정</button>
                    <button type="button" onClick={() => onDeleteMonthlySummary(summary.id)}>삭제</button>
                  </S.ItemActions>
                </S.ListItem>
              ))}
            </S.List>
          )}
        </S.Panel>
      )}
    </S.Container>
  );
}
