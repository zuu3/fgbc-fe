'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { AnimatePresence, motion } from 'framer-motion';
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
type MessageType = 'success' | 'error' | 'info';

export default function AdminContainer() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>('bulletin');
  const [bulletins, setBulletins] = useState<Bulletin[]>([]);
  const [monthlySummaries, setMonthlySummaries] = useState<MonthlySummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<MessageType>('info');
  const [isUploadingBulletinFile, setIsUploadingBulletinFile] = useState(false);
  const [selectedBulletinFile, setSelectedBulletinFile] = useState<File | null>(null);
  const [isPdfParsing, setIsPdfParsing] = useState(false);
  const [selectedPdfFile, setSelectedPdfFile] = useState<File | null>(null);
  const [ocrPassword, setOcrPassword] = useState('');
  const [editingBulletinId, setEditingBulletinId] = useState<string | null>(null);
  const [editingMonthlySummaryId, setEditingMonthlySummaryId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modal, setModal] = useState<{ message: string; onConfirm: () => void } | null>(null);

  const [bulletinForm, setBulletinForm] = useState({
    title: '',
    content_category: 'bulletin' as ContentCategory,
    week_start_date: '',
    service_type: '',
    file_path: '',
    content: '',
    is_latest: true,
  });

  const [monthlySummaryForm, setMonthlySummaryForm] = useState({
    month_key: '',
    content: '',
  });

  const notify = (text: string, type: MessageType = 'info') => {
    setMessage(text);
    setMessageType(type);
  };

  const activeDocumentTab = documentTabs.find((tab) => tab.key === activeTab);
  const visibleDocuments = activeDocumentTab
    ? bulletins
        .filter((item) => item.content_category === activeDocumentTab.key)
        .filter((item) => !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const tabCounts = documentTabs.reduce<Record<string, number>>((acc, tab) => {
    acc[tab.key] = bulletins.filter((item) => item.content_category === tab.key).length;
    return acc;
  }, {});

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
          const bulletinError = bulletinRes.ok ? null : await bulletinRes.json().catch(() => ({ error: 'failed' }));
          const monthlyError = monthlyRes.ok ? null : await monthlyRes.json().catch(() => ({ error: 'failed' }));
          notify(`목록 조회 실패: ${bulletinError?.error || ''} ${monthlyError?.error || ''}`.trim(), 'error');
          return;
        }

        const bulletinJson = await bulletinRes.json() as { bulletins?: Bulletin[] };
        const monthlyJson = await monthlyRes.json() as { monthlySummaries?: MonthlySummary[] };
        setBulletins(bulletinJson.bulletins || []);
        setMonthlySummaries(monthlyJson.monthlySummaries || []);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    fetchAdminData();
    return () => { mounted = false; };
  }, [router]);

  const resetBulletinForm = (category: ContentCategory) => {
    setEditingBulletinId(null);
    setSelectedBulletinFile(null);
    setBulletinForm({ title: '', content_category: category, week_start_date: '', service_type: '', file_path: '', content: '', is_latest: true });
    setMessage('');
    setSearchQuery('');
  };

  const onBulletinSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    const isTextCategory = activeDocumentTab?.key === 'pastoral_letter' || activeDocumentTab?.key === 'sharing_worship';
    if (isTextCategory && !bulletinForm.content.trim()) { notify('내용을 입력해 주세요.', 'error'); return; }
    if (!isTextCategory && !bulletinForm.file_path) { notify('파일을 먼저 업로드해 주세요.', 'error'); return; }

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
    if (!response.ok) { notify(`저장 실패: ${json.error || 'unknown error'}`, 'error'); return; }

    if (json.bulletin) {
      if (editingBulletinId) {
        setBulletins((prev) => prev.map((item) => (item.id === editingBulletinId ? json.bulletin! : item)));
      } else {
        setBulletins((prev) => [json.bulletin!, ...prev]);
      }
    }
    resetBulletinForm(activeDocumentTab?.key ?? 'bulletin');
    notify(editingBulletinId ? '수정되었습니다.' : '등록되었습니다.', 'success');
  };

  const onUploadBulletinFile = async () => {
    if (!selectedBulletinFile) { notify('파일을 먼저 선택해 주세요.', 'error'); return; }
    setIsUploadingBulletinFile(true);
    setMessage('');
    try {
      const formData = new FormData();
      formData.append('file', selectedBulletinFile);
      formData.append('content_category', activeDocumentTab?.key ?? bulletinForm.content_category);

      const response = await fetch('/api/admin/bulletins/upload', { method: 'POST', body: formData });
      const json = await response.json().catch(() => ({} as { error?: string; filePath?: string }));
      if (!response.ok || !json.filePath) { notify(`업로드 실패: ${json.error || 'unknown error'}`, 'error'); return; }

      setBulletinForm((prev) => ({ ...prev, file_path: json.filePath! }));
      notify('업로드 완료. 등록 버튼을 눌러 저장하세요.', 'success');
    } finally {
      setIsUploadingBulletinFile(false);
    }
  };

  const onParsePdf = async () => {
    if (!selectedPdfFile) { notify('PDF를 먼저 선택해 주세요.', 'error'); return; }
    if (!ocrPassword) { notify('OCR 비밀번호를 입력해 주세요.', 'error'); return; }
    setIsPdfParsing(true);
    setMessage('');
    try {
      const formData = new FormData();
      formData.append('file', selectedPdfFile);
      formData.append('content_category', activeDocumentTab?.key ?? bulletinForm.content_category);
      formData.append('ocr_password', ocrPassword);

      const response = await fetch('/api/admin/parse-pdf', { method: 'POST', body: formData });
      const json = await response.json() as { title?: string; week_start_date?: string; content?: string; error?: string };
      if (!response.ok) { notify(`파싱 실패: ${json.error || 'unknown error'}`, 'error'); return; }

      setBulletinForm((prev) => ({
        ...prev,
        ...(json.title ? { title: json.title } : {}),
        ...(json.week_start_date ? { week_start_date: json.week_start_date } : {}),
        ...(json.content ? { content: json.content } : {}),
      }));
      notify('내용을 불러왔습니다. 확인 후 저장하세요.', 'success');
    } finally {
      setIsPdfParsing(false);
    }
  };

  const onMonthlySummarySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    if (!monthlySummaryForm.month_key || !monthlySummaryForm.content.trim()) {
      notify('대상 월과 내용을 입력해 주세요.', 'error');
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
    if (!response.ok) { notify(`저장 실패: ${json.error || 'unknown error'}`, 'error'); return; }

    if (json.monthlySummary) {
      if (editingMonthlySummaryId) {
        setMonthlySummaries((prev) => prev.map((item) => (item.id === editingMonthlySummaryId ? json.monthlySummary! : item)));
      } else {
        setMonthlySummaries((prev) => [json.monthlySummary!, ...prev]);
      }
    }

    setEditingMonthlySummaryId(null);
    setMonthlySummaryForm({ month_key: '', content: '' });
    setMessage('');
    notify(editingMonthlySummaryId ? '수정되었습니다.' : '등록되었습니다.', 'success');
  };

  const onLogout = async () => { await signOut({ callbackUrl: '/admin/login' }); };

  const onEditBulletin = (bulletin: Bulletin) => {
    setEditingBulletinId(bulletin.id);
    setBulletinForm({
      title: bulletin.title,
      content_category: bulletin.content_category,
      week_start_date: bulletin.week_start_date,
      service_type: bulletin.service_type || '',
      file_path: bulletin.file_path || '',
      content: bulletin.content || '',
      is_latest: bulletin.is_latest,
    });
    notify('수정할 내용을 변경한 후 저장하세요.', 'info');
  };

  const onDeleteBulletin = (id: string, title: string) => {
    setModal({
      message: `"${title}"을(를) 삭제할까요?`,
      onConfirm: async () => {
        setModal(null);
        const response = await fetch(`/api/admin/bulletins?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
        const json = await response.json().catch(() => ({} as { error?: string }));
        if (!response.ok) { notify(`삭제 실패: ${json.error || 'unknown error'}`, 'error'); return; }
        setBulletins((prev) => prev.filter((item) => item.id !== id));
        if (editingBulletinId === id) resetBulletinForm(activeDocumentTab?.key ?? 'bulletin');
        notify('삭제되었습니다.', 'success');
      },
    });
  };

  const onEditMonthlySummary = (summary: MonthlySummary) => {
    setEditingMonthlySummaryId(summary.id);
    setMonthlySummaryForm({ month_key: summary.month_key, content: summary.content });
    notify('수정할 내용을 변경한 후 저장하세요.', 'info');
  };

  const onDeleteMonthlySummary = (id: string, monthKey: string) => {
    setModal({
      message: `${monthKey} 월간 정보를 삭제할까요?`,
      onConfirm: async () => {
        setModal(null);
        const response = await fetch(`/api/admin/monthly-summaries?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
        const json = await response.json().catch(() => ({} as { error?: string }));
        if (!response.ok) { notify(`삭제 실패: ${json.error || 'unknown error'}`, 'error'); return; }
        setMonthlySummaries((prev) => prev.filter((item) => item.id !== id));
        if (editingMonthlySummaryId === id) {
          setEditingMonthlySummaryId(null);
          setMonthlySummaryForm({ month_key: '', content: '' });
        }
        notify('삭제되었습니다.', 'success');
      },
    });
  };

  return (
    <>
    <AnimatePresence>
      {modal && (
        <motion.div
          key="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{ position: 'fixed', inset: 0, zIndex: 1000 }}
        >
          <S.ModalOverlay onClick={() => setModal(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <S.ModalCard onClick={(e) => e.stopPropagation()}>
                <S.ModalTitle>삭제 확인</S.ModalTitle>
                <S.ModalDescription>{modal.message} 이 작업은 되돌릴 수 없습니다.</S.ModalDescription>
                <S.ModalActions>
                  <S.ModalCancelButton type="button" onClick={() => setModal(null)}>취소</S.ModalCancelButton>
                  <S.ModalDeleteButton type="button" onClick={modal.onConfirm}>삭제</S.ModalDeleteButton>
                </S.ModalActions>
              </S.ModalCard>
            </motion.div>
          </S.ModalOverlay>
        </motion.div>
      )}
    </AnimatePresence>
    <S.Container>
      <S.Header>
        <S.HeaderLeft>
          <S.Title>관리자 페이지</S.Title>
          <S.Description>주보, 교회 생활 자료, 월간 정보를 등록·수정·삭제합니다.</S.Description>
        </S.HeaderLeft>
        <S.HeaderAction type="button" onClick={onLogout}>로그아웃</S.HeaderAction>
      </S.Header>

      <S.TabRow>
        {documentTabs.map((tab) => (
          <S.TabButton
            key={tab.key}
            type="button"
            $active={activeTab === tab.key}
            onClick={() => { setActiveTab(tab.key); resetBulletinForm(tab.key); }}
          >
            {tab.label}
            {!isLoading && <S.TabBadge $active={activeTab === tab.key}>{tabCounts[tab.key] ?? 0}</S.TabBadge>}
          </S.TabButton>
        ))}
        <S.TabButton type="button" $active={activeTab === 'monthly'} onClick={() => { setActiveTab('monthly'); setSearchQuery(''); }}>
          월간 관리
          {!isLoading && <S.TabBadge $active={activeTab === 'monthly'}>{monthlySummaries.length}</S.TabBadge>}
        </S.TabButton>
      </S.TabRow>

      {activeDocumentTab && (
        <S.TwoPanel>
          {/* 좌측: 목록 */}
          <S.ListPane>
            <S.ListPaneHeader>
              <S.ListPaneTitle>등록된 {activeDocumentTab.label}</S.ListPaneTitle>
              <S.ListCount>{visibleDocuments.length}건</S.ListCount>
            </S.ListPaneHeader>
            <S.ListSearch>
              <input
                type="text"
                placeholder="제목, 날짜로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </S.ListSearch>
            <S.ListScroll>
              {isLoading ? (
                <S.EmptyState><p>불러오는 중...</p></S.EmptyState>
              ) : visibleDocuments.length === 0 ? (
                <S.EmptyState><p>{searchQuery ? `"${searchQuery}" 검색 결과 없음` : activeDocumentTab.emptyText}</p></S.EmptyState>
              ) : (
                <S.List>
                  {visibleDocuments.map((bulletin, idx) => (
                    <motion.div
                      key={bulletin.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.18, delay: Math.min(idx * 0.03, 0.3) }}
                    >
                      <S.ListItem
                        $selected={editingBulletinId === bulletin.id}
                        onClick={() => onEditBulletin(bulletin)}
                      >
                        <S.ListItemBody>
                          <S.ListTitle>{bulletin.title}</S.ListTitle>
                          <S.ListMeta>{formatKstDate(bulletin.week_start_date)} · {bulletin.service_type ?? '예배 정보 없음'}</S.ListMeta>
                        </S.ListItemBody>
                        <S.ItemActions>
                          <S.DeleteButton type="button" onClick={(e) => { e.stopPropagation(); onDeleteBulletin(bulletin.id, bulletin.title); }}>삭제</S.DeleteButton>
                        </S.ItemActions>
                      </S.ListItem>
                    </motion.div>
                  ))}
                </S.List>
              )}
            </S.ListScroll>
          </S.ListPane>

          {/* 우측: 에디터 */}
          <S.EditorPane $editing={!!editingBulletinId}>
            <S.EditorPaneHeader>
              <S.EditorPaneTitle>
                {editingBulletinId ? `수정: ${bulletinForm.title}` : activeDocumentTab.formTitle}
              </S.EditorPaneTitle>
              {editingBulletinId && (
                <S.CancelButton type="button" onClick={() => resetBulletinForm(activeDocumentTab.key)}>
                  취소
                </S.CancelButton>
              )}
            </S.EditorPaneHeader>
            <S.EditorBody>
              <AnimatePresence mode="wait">
                {(message || (!editingBulletinId)) && (
                  <motion.div
                    key={message || 'hint'}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    {message
                      ? <S.Message $type={messageType}>{message}</S.Message>
                      : <S.Message $type="info">목록에서 항목을 클릭하면 수정할 수 있습니다.</S.Message>
                    }
                  </motion.div>
                )}
              </AnimatePresence>

              <S.Form id="bulletin-form" onSubmit={onBulletinSubmit}>
                <S.FormGrid>
                  <S.Field>
                    <label htmlFor="bulletin-title">제목</label>
                    <input
                      id="bulletin-title"
                      placeholder={activeDocumentTab.placeholder}
                      value={bulletinForm.title}
                      onChange={(e) => setBulletinForm((prev) => ({ ...prev, title: e.target.value }))}
                      required
                    />
                  </S.Field>
                  <S.Field>
                    <label htmlFor="bulletin-date">주차 날짜</label>
                    <input
                      id="bulletin-date"
                      type="date"
                      value={bulletinForm.week_start_date}
                      onChange={(e) => setBulletinForm((prev) => ({ ...prev, week_start_date: e.target.value }))}
                      required
                    />
                  </S.Field>
                  <S.Field>
                    <label htmlFor="bulletin-service">구분 메모</label>
                    <input
                      id="bulletin-service"
                      placeholder="예: 주일 1-3부 예배"
                      value={bulletinForm.service_type}
                      onChange={(e) => setBulletinForm((prev) => ({ ...prev, service_type: e.target.value }))}
                    />
                  </S.Field>
                  {(activeDocumentTab?.key === 'pastoral_letter' || activeDocumentTab?.key === 'sharing_worship') ? (
                    <>
                      <S.Field className="full">
                        <label>PDF에서 자동 입력</label>
                        <S.PdfImportRow>
                          <input type="file" accept="application/pdf" onChange={(e) => setSelectedPdfFile(e.target.files?.[0] ?? null)} />
                          <input type="password" placeholder="OCR 비밀번호" value={ocrPassword} onChange={(e) => setOcrPassword(e.target.value)} autoComplete="off" />
                          <button type="button" onClick={onParsePdf} disabled={isPdfParsing || !selectedPdfFile || !ocrPassword}>
                            {isPdfParsing ? '불러오는 중...' : 'PDF 불러오기'}
                          </button>
                        </S.PdfImportRow>
                      </S.Field>
                      <S.Field className="full">
                        <label htmlFor="bulletin-content">내용</label>
                        <textarea
                          id="bulletin-content"
                          rows={10}
                          placeholder="본문 내용을 입력하세요."
                          value={bulletinForm.content}
                          onChange={(e) => setBulletinForm((prev) => ({ ...prev, content: e.target.value }))}
                          required
                        />
                      </S.Field>
                    </>
                  ) : (
                    <S.Field>
                      <label>파일</label>
                      <S.FileInputArea>
                        <input id="bulletin-file" type="file" accept="application/pdf,image/*" onChange={(e) => setSelectedBulletinFile(e.target.files?.[0] ?? null)} />
                        <S.FileInputLabel htmlFor="bulletin-file">파일 선택</S.FileInputLabel>
                        <S.FileInputName>{selectedBulletinFile?.name || '선택된 파일 없음'}</S.FileInputName>
                      </S.FileInputArea>
                      <S.UploadRow>
                        <button type="button" onClick={onUploadBulletinFile} disabled={isUploadingBulletinFile || !selectedBulletinFile}>
                          {isUploadingBulletinFile ? '업로드 중...' : '서버에 업로드'}
                        </button>
                        {bulletinForm.file_path && <span>✓ {bulletinForm.file_path.split('/').pop()}</span>}
                      </S.UploadRow>
                    </S.Field>
                  )}
                </S.FormGrid>
              </S.Form>

              <S.ActionRow>
                <button type="submit" className="primary" form="bulletin-form">
                  {editingBulletinId ? '수정 저장' : `${activeDocumentTab.label} 등록`}
                </button>
              </S.ActionRow>
            </S.EditorBody>
          </S.EditorPane>
        </S.TwoPanel>
      )}

      {activeTab === 'monthly' && (
        <S.TwoPanel>
          {/* 좌측: 월간 목록 */}
          <S.ListPane>
            <S.ListPaneHeader>
              <S.ListPaneTitle>등록된 월간 정보</S.ListPaneTitle>
              <S.ListCount>{monthlySummaries.filter((s) => !searchQuery || s.month_key.includes(searchQuery)).length}건</S.ListCount>
            </S.ListPaneHeader>
            <S.ListSearch>
              <input
                type="text"
                placeholder="연도, 월로 검색... (예: 2026-05)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </S.ListSearch>
            <S.ListScroll>
              {isLoading ? (
                <S.EmptyState><p>불러오는 중...</p></S.EmptyState>
              ) : monthlySummaries.filter((s) => !searchQuery || s.month_key.includes(searchQuery)).length === 0 ? (
                <S.EmptyState><p>{searchQuery ? `"${searchQuery}" 검색 결과 없음` : '등록된 월간 정보가 없습니다.'}</p></S.EmptyState>
              ) : (
                <S.List>
                  {monthlySummaries.filter((s) => !searchQuery || s.month_key.includes(searchQuery)).map((summary, idx) => (
                    <motion.div
                      key={summary.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.18, delay: Math.min(idx * 0.03, 0.3) }}
                    >
                      <S.ListItem
                        $selected={editingMonthlySummaryId === summary.id}
                        onClick={() => onEditMonthlySummary(summary)}
                      >
                        <S.ListItemBody>
                          <S.ListTitle>{summary.month_key} 월간 일정</S.ListTitle>
                          <S.ListMeta>{formatKstDate(summary.published_at || new Date().toISOString())}</S.ListMeta>
                        </S.ListItemBody>
                        <S.ItemActions>
                          <S.DeleteButton type="button" onClick={(e) => { e.stopPropagation(); onDeleteMonthlySummary(summary.id, summary.month_key); }}>삭제</S.DeleteButton>
                        </S.ItemActions>
                      </S.ListItem>
                    </motion.div>
                  ))}
                </S.List>
              )}
            </S.ListScroll>
          </S.ListPane>

          {/* 우측: 월간 에디터 */}
          <S.EditorPane $editing={!!editingMonthlySummaryId}>
            <S.EditorPaneHeader>
              <S.EditorPaneTitle>
                {editingMonthlySummaryId ? `수정: ${monthlySummaryForm.month_key} 월간` : '월간 정보 등록'}
              </S.EditorPaneTitle>
              {editingMonthlySummaryId && (
                <S.CancelButton type="button" onClick={() => {
                  setEditingMonthlySummaryId(null);
                  setMonthlySummaryForm({ month_key: '', content: '' });
                  setMessage('');
                }}>
                  취소
                </S.CancelButton>
              )}
            </S.EditorPaneHeader>
            <S.EditorBody>
              <AnimatePresence mode="wait">
                {(message || (!editingMonthlySummaryId)) && (
                  <motion.div
                    key={message || 'hint'}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    {message
                      ? <S.Message $type={messageType}>{message}</S.Message>
                      : <S.Message $type="info">목록에서 항목을 클릭하면 수정할 수 있습니다.</S.Message>
                    }
                  </motion.div>
                )}
              </AnimatePresence>
              <S.Form id="monthly-form" onSubmit={onMonthlySummarySubmit}>
                <S.FormGrid>
                  <S.Field>
                    <label htmlFor="monthly-key">대상 월</label>
                    <input
                      id="monthly-key"
                      type="month"
                      value={monthlySummaryForm.month_key}
                      onChange={(e) => setMonthlySummaryForm((prev) => ({ ...prev, month_key: e.target.value }))}
                      required
                    />
                  </S.Field>
                  <S.Field className="full">
                    <label htmlFor="monthly-content">월간 내용</label>
                    <textarea
                      id="monthly-content"
                      rows={10}
                      placeholder="예시)&#10;3일 | 어린이주일 / 전 교인 성경공부 15강&#10;15일-17일 | 전 교인 말씀 부흥회"
                      value={monthlySummaryForm.content}
                      onChange={(e) => setMonthlySummaryForm((prev) => ({ ...prev, content: e.target.value }))}
                      required
                    />
                  </S.Field>
                </S.FormGrid>
              </S.Form>

              <S.ActionRow>
                <button type="submit" className="primary" form="monthly-form">
                  {editingMonthlySummaryId ? '수정 저장' : '월간 등록'}
                </button>
              </S.ActionRow>
            </S.EditorBody>
          </S.EditorPane>
        </S.TwoPanel>
      )}
    </S.Container>
    </>
  );
}
