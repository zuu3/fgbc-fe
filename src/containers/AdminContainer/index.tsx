'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './style';
import type { Bulletin, MonthlySummary, Notice } from '@/types/content';
import { formatKstDate, toKstIsoFromDateTimeLocal } from '@/lib/dateTimeKst';

const categoryLabel = {
  worship: '예배',
  event: '행사',
  group: '모임',
  volunteer: '봉사',
  urgent: '긴급',
} as const;

export default function AdminContainer() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'notices' | 'bulletins' | 'monthly'>('notices');
  const [notices, setNotices] = useState<Notice[]>([]);
  const [bulletins, setBulletins] = useState<Bulletin[]>([]);
  const [monthlySummaries, setMonthlySummaries] = useState<MonthlySummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isUploadingBulletinFile, setIsUploadingBulletinFile] = useState(false);
  const [selectedBulletinFile, setSelectedBulletinFile] = useState<File | null>(null);
  const [sameAsStart, setSameAsStart] = useState(false);
  const [editingNoticeId, setEditingNoticeId] = useState<string | null>(null);
  const [editingBulletinId, setEditingBulletinId] = useState<string | null>(null);
  const [editingMonthlySummaryId, setEditingMonthlySummaryId] = useState<string | null>(null);

  const [noticeForm, setNoticeForm] = useState({
    title: '',
    category: 'worship',
    start_at: '',
    end_at: '',
    content: '',
    location: '',
  });

  const [bulletinForm, setBulletinForm] = useState({
    title: '',
    week_start_date: '',
    service_type: '',
    file_path: '',
    is_latest: true,
  });

  const [monthlySummaryForm, setMonthlySummaryForm] = useState({
    month_key: '',
    content: '',
  });

  useEffect(() => {
    let mounted = true;

    const fetchAdminData = async () => {
      try {
        const [noticeRes, bulletinRes, monthlyRes] = await Promise.all([
          fetch('/api/admin/notices', { cache: 'no-store' }),
          fetch('/api/admin/bulletins', { cache: 'no-store' }),
          fetch('/api/admin/monthly-summaries', { cache: 'no-store' }),
        ]);

        if (!mounted) return;

        if (noticeRes.status === 401 || bulletinRes.status === 401 || monthlyRes.status === 401) {
          router.replace('/admin/login');
          return;
        }

        if (!noticeRes.ok || !bulletinRes.ok || !monthlyRes.ok) {
          const noticeError = noticeRes.ok ? null : await noticeRes.json().catch(() => ({ error: 'failed notices' }));
          const bulletinError = bulletinRes.ok ? null : await bulletinRes.json().catch(() => ({ error: 'failed bulletins' }));
          const monthlyError = monthlyRes.ok ? null : await monthlyRes.json().catch(() => ({ error: 'failed monthly summaries' }));
          setMessage(`목록 조회 실패: ${noticeError?.error || ''} ${bulletinError?.error || ''} ${monthlyError?.error || ''}`.trim());
          return;
        }

        const noticeJson = await noticeRes.json() as { notices?: Notice[] };
        const bulletinJson = await bulletinRes.json() as { bulletins?: Bulletin[] };
        const monthlyJson = await monthlyRes.json() as { monthlySummaries?: MonthlySummary[] };
        setNotices(noticeJson.notices || []);
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

  const onNoticeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    if (!noticeForm.start_at || !noticeForm.end_at) {
      setMessage('시작/종료 일시를 입력해 주세요.');
      return;
    }

    const payload = {
      ...noticeForm,
      start_at: toKstIsoFromDateTimeLocal(noticeForm.start_at),
      end_at: toKstIsoFromDateTimeLocal(noticeForm.end_at),
      ...(editingNoticeId ? { id: editingNoticeId } : {}),
    };

    const response = await fetch('/api/admin/notices', {
      method: editingNoticeId ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const json = await response.json() as { notice?: Notice; error?: string };
    if (!response.ok) {
      setMessage(`공지 저장 실패: ${json.error || 'unknown error'}`);
      return;
    }
    if (json.notice) {
      if (editingNoticeId) {
        setNotices((prev) => prev.map((item) => (item.id === editingNoticeId ? json.notice! : item)));
      } else {
        setNotices((prev) => [json.notice!, ...prev]);
      }
    }
    setEditingNoticeId(null);
    setNoticeForm({
      title: '',
      category: 'worship',
      start_at: '',
      end_at: '',
      content: '',
      location: '',
    });
    setSameAsStart(false);
    setMessage(editingNoticeId ? '공지가 수정되었습니다.' : '공지가 등록되었습니다.');
  };

  const onBulletinSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    if (!bulletinForm.file_path) {
      setMessage('주보 파일을 먼저 업로드해 주세요.');
      return;
    }

    const payload = {
      ...bulletinForm,
      ...(editingBulletinId ? { id: editingBulletinId } : {}),
    };

    const response = await fetch('/api/admin/bulletins', {
      method: editingBulletinId ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const json = await response.json() as { bulletin?: Bulletin; error?: string };
    if (!response.ok) {
      setMessage(`주보 저장 실패: ${json.error || 'unknown error'}`);
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
      week_start_date: '',
      service_type: '',
      file_path: '',
      is_latest: true,
    });
    setMessage(editingBulletinId ? '주보가 수정되었습니다.' : '주보가 등록되었습니다.');
  };

  const onUploadBulletinFile = async () => {
    if (!selectedBulletinFile) {
      setMessage('업로드할 주보 파일을 먼저 선택해 주세요.');
      return;
    }

    setIsUploadingBulletinFile(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('file', selectedBulletinFile);

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
      setMessage('파일 업로드 완료. 주보 등록 버튼을 눌러 저장해 주세요.');
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
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
    router.refresh();
  };

  const toDateTimeLocalValue = (value: string): string => {
    if (!value) return '';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    const korea = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    const year = korea.getFullYear();
    const month = String(korea.getMonth() + 1).padStart(2, '0');
    const day = String(korea.getDate()).padStart(2, '0');
    const hours = String(korea.getHours()).padStart(2, '0');
    const minutes = String(korea.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const onEditNotice = (notice: Notice) => {
    setActiveTab('notices');
    setEditingNoticeId(notice.id);
    const startLocal = toDateTimeLocalValue(notice.start_at);
    const endLocal = toDateTimeLocalValue(notice.end_at);
    setNoticeForm({
      title: notice.title,
      category: notice.category,
      start_at: startLocal,
      end_at: endLocal,
      content: notice.content,
      location: notice.location || '',
    });
    setSameAsStart(startLocal === endLocal);
    setMessage('공지 수정 모드입니다. 내용 수정 후 저장하세요.');
  };

  const onDeleteNotice = async (id: string) => {
    if (!window.confirm('이 공지를 삭제할까요?')) return;
    const response = await fetch(`/api/admin/notices?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    const json = await response.json().catch(() => ({} as { error?: string }));
    if (!response.ok) {
      setMessage(`공지 삭제 실패: ${json.error || 'unknown error'}`);
      return;
    }
    setNotices((prev) => prev.filter((item) => item.id !== id));
    setMessage('공지가 삭제되었습니다.');
  };

  const onEditBulletin = (bulletin: Bulletin) => {
    setActiveTab('bulletins');
    setEditingBulletinId(bulletin.id);
    setBulletinForm({
      title: bulletin.title,
      week_start_date: bulletin.week_start_date,
      service_type: bulletin.service_type || '',
      file_path: bulletin.file_path,
      is_latest: bulletin.is_latest,
    });
    setMessage('주보 수정 모드입니다. 내용 수정 후 저장하세요.');
  };

  const onDeleteBulletin = async (id: string) => {
    if (!window.confirm('이 주보를 삭제할까요?')) return;
    const response = await fetch(`/api/admin/bulletins?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    const json = await response.json().catch(() => ({} as { error?: string }));
    if (!response.ok) {
      setMessage(`주보 삭제 실패: ${json.error || 'unknown error'}`);
      return;
    }
    setBulletins((prev) => prev.filter((item) => item.id !== id));
    setMessage('주보가 삭제되었습니다.');
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
        <S.Description>Supabase 데이터 기반으로 공지와 주보를 등록/조회합니다.</S.Description>
        <S.HeaderAction type="button" onClick={onLogout}>로그아웃</S.HeaderAction>
      </S.Header>

      <S.TabRow>
        <S.TabButton
          type="button"
          $active={activeTab === 'notices'}
          onClick={() => setActiveTab('notices')}
        >
          공지 관리
        </S.TabButton>
        <S.TabButton
          type="button"
          $active={activeTab === 'bulletins'}
          onClick={() => setActiveTab('bulletins')}
        >
          주보 관리
        </S.TabButton>
        <S.TabButton
          type="button"
          $active={activeTab === 'monthly'}
          onClick={() => setActiveTab('monthly')}
        >
          월간 관리
        </S.TabButton>
      </S.TabRow>

      {activeTab === 'notices' && (
        <S.Panel>
          <S.SectionTitle>공지 등록</S.SectionTitle>
          <S.Form id="notice-form" onSubmit={onNoticeSubmit}>
            <S.FormGrid>
            <S.Field>
              <label htmlFor="notice-title">제목</label>
              <input
                id="notice-title"
                placeholder="예: 성찬예배 안내"
                value={noticeForm.title}
                onChange={(event) => setNoticeForm((prev) => ({ ...prev, title: event.target.value }))}
                required
              />
            </S.Field>
            <S.Field>
              <label htmlFor="notice-category">카테고리</label>
              <select
                id="notice-category"
                value={noticeForm.category}
                onChange={(event) => setNoticeForm((prev) => ({ ...prev, category: event.target.value }))}
              >
                <option value="worship">예배</option>
                <option value="event">행사</option>
                <option value="group">모임</option>
                <option value="volunteer">봉사</option>
                <option value="urgent">긴급</option>
              </select>
            </S.Field>
            <S.Field>
              <label htmlFor="notice-start">시작 일시</label>
              <input
                id="notice-start"
                type="datetime-local"
                value={noticeForm.start_at}
                onChange={(event) => setNoticeForm((prev) => ({
                  ...prev,
                  start_at: event.target.value,
                  end_at: sameAsStart ? event.target.value : prev.end_at,
                }))}
                required
              />
            </S.Field>
            <S.Field>
              <label htmlFor="notice-end">종료 일시</label>
              <S.CheckRow>
                <input
                  id="notice-end-same"
                  type="checkbox"
                  checked={sameAsStart}
                  onChange={(event) => {
                    const checked = event.target.checked;
                    setSameAsStart(checked);
                    if (checked) {
                      setNoticeForm((prev) => ({ ...prev, end_at: prev.start_at }));
                    }
                  }}
                />
                <label htmlFor="notice-end-same">시작 일시와 동일</label>
              </S.CheckRow>
              <input
                id="notice-end"
                type="datetime-local"
                value={noticeForm.end_at}
                onChange={(event) => setNoticeForm((prev) => ({ ...prev, end_at: event.target.value }))}
                disabled={sameAsStart}
                required
              />
            </S.Field>
            <S.Field className="full">
              <label htmlFor="notice-content">내용</label>
              <textarea
                id="notice-content"
                rows={5}
                placeholder="공지 상세 내용을 입력하세요."
                value={noticeForm.content}
                onChange={(event) => setNoticeForm((prev) => ({ ...prev, content: event.target.value }))}
                required
              />
            </S.Field>
            <S.Field>
              <label htmlFor="notice-location">장소</label>
              <input
                id="notice-location"
                placeholder="예: 2층 본당"
                value={noticeForm.location}
                onChange={(event) => setNoticeForm((prev) => ({ ...prev, location: event.target.value }))}
              />
            </S.Field>
            <S.Field>
              <label>발행 형태</label>
              <S.FixedValue>즉시발행</S.FixedValue>
            </S.Field>
            </S.FormGrid>
          </S.Form>

          <S.ActionRow>
            <button type="submit" className="primary" form="notice-form">
              {editingNoticeId ? '공지 수정 저장' : '공지 등록'}
            </button>
          </S.ActionRow>

          <S.SectionTitle>등록된 공지</S.SectionTitle>
          {message && <S.Message>{message}</S.Message>}
          {isLoading ? (
            <S.Message>공지 불러오는 중...</S.Message>
          ) : notices.length === 0 ? (
            <S.Message>등록된 공지가 없습니다.</S.Message>
          ) : (
            <S.List>
              {notices.map((notice) => (
              <S.ListItem key={notice.id}>
                <S.ListTag>{categoryLabel[notice.category]}</S.ListTag>
                <S.ListTitle>{notice.title}</S.ListTitle>
                <S.ListMeta>
                  {formatKstDate(notice.start_at)} · {notice.location ?? '장소 미정'}
                </S.ListMeta>
                <S.ItemActions>
                  <button type="button" onClick={() => onEditNotice(notice)}>수정</button>
                  <button type="button" onClick={() => onDeleteNotice(notice.id)}>삭제</button>
                </S.ItemActions>
              </S.ListItem>
              ))}
            </S.List>
          )}
        </S.Panel>
      )}

      {activeTab === 'bulletins' && (
        <S.Panel>
          <S.SectionTitle>주보 등록</S.SectionTitle>
          <S.Form id="bulletin-form" onSubmit={onBulletinSubmit}>
            <S.FormGrid>
            <S.Field>
              <label htmlFor="bulletin-title">제목</label>
              <input
                id="bulletin-title"
                placeholder="예: 2026년 3월 첫째 주 주보"
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
              <label htmlFor="bulletin-service">예배 구분</label>
              <input
                id="bulletin-service"
                placeholder="예: 주일 1-3부 예배"
                value={bulletinForm.service_type}
                onChange={(event) => setBulletinForm((prev) => ({ ...prev, service_type: event.target.value }))}
              />
            </S.Field>
            <S.Field>
              <label htmlFor="bulletin-file">주보 파일 업로드</label>
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
              {editingBulletinId ? '주보 수정 저장' : '주보 등록'}
            </button>
          </S.ActionRow>

          <S.SectionTitle>등록된 주보</S.SectionTitle>
          {message && <S.Message>{message}</S.Message>}
          {isLoading ? (
            <S.Message>주보 불러오는 중...</S.Message>
          ) : bulletins.length === 0 ? (
            <S.Message>등록된 주보가 없습니다.</S.Message>
          ) : (
            <S.List>
              {bulletins.map((bulletin) => (
              <S.ListItem key={bulletin.id}>
                <S.ListTag>{bulletin.is_latest ? '최신' : '주보'}</S.ListTag>
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
                <label htmlFor="monthly-content">내용</label>
                <textarea
                  id="monthly-content"
                  rows={8}
                  placeholder={'예: 6일 | 12주 큐티바이블 시작\n15일 | 유치부 수여식\n22일 | 전 교인 성경공부'}
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
                  <S.ListTitle>{`${summary.month_key} 월간 정보`}</S.ListTitle>
                  <S.ListMeta style={{ whiteSpace: 'pre-line' }}>
                    {summary.content}
                  </S.ListMeta>
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
