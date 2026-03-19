'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import * as S from './style';
import { getPublishedBulletins, resolveBulletinFileUrl } from '@/lib/content/client';
import type { Bulletin } from '@/types/content';
import { formatKstDate } from '@/lib/dateTimeKst';

function formatDate(dateText: string): string {
  return formatKstDate(dateText);
}

function isPdfUrl(url: string): boolean {
  return /\.pdf(?:$|[?#])/i.test(url);
}

function toPdfEmbedUrl(url: string): string {
  if (!url) return url;
  return `${url}${url.includes('#') ? '&' : '#'}toolbar=0&navpanes=0&scrollbar=0&view=FitH`;
}

export default function BulletinsContainer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const bulletinIdParam = searchParams.get('bulletinId');
  const [bulletins, setBulletins] = useState<Bulletin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [manualExpandedBulletinId, setManualExpandedBulletinId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    let mounted = true;

    getPublishedBulletins(20).then((items) => {
      if (!mounted) return;
      setBulletins(items);
      setIsLoading(false);
    }).catch(() => {
      if (!mounted) return;
      setBulletins([]);
      setIsLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const defaultExpandedBulletin = useMemo(() => {
    if (bulletins.length === 0) return null;
    if (bulletinIdParam) {
      return bulletins.find((item) => item.id === bulletinIdParam) ?? bulletins[0];
    }
    return bulletins[0];
  }, [bulletinIdParam, bulletins]);

  const currentExpandedBulletinId = manualExpandedBulletinId === undefined
    ? defaultExpandedBulletin?.id ?? null
    : manualExpandedBulletinId;

  const onToggleBulletin = (id: string) => {
    const willOpen = currentExpandedBulletinId !== id;

    const params = new URLSearchParams(searchParams.toString());
    if (willOpen) {
      params.set('bulletinId', id);
    } else {
      params.delete('bulletinId');
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });

    setManualExpandedBulletinId((prev) => {
      const current = prev === undefined ? defaultExpandedBulletin?.id ?? null : prev;
      return current === id ? null : id;
    });
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>주보</S.Title>
        <S.Description>매주 발행되는 교회 소식을 확인하세요.</S.Description>
      </S.Header>

      {isLoading && <S.StatusText>주보 불러오는 중...</S.StatusText>}
      {!isLoading && bulletins.length === 0 && <S.StatusText>등록된 주보가 없습니다.</S.StatusText>}

      {!isLoading && bulletins.length > 0 && (
        <S.AccordionList>
          {bulletins.map((bulletin) => {
            const fileUrl = resolveBulletinFileUrl(bulletin.file_path);
            const isOpen = currentExpandedBulletinId === bulletin.id;
            const pdfFile = isPdfUrl(fileUrl);

            return (
              <S.AccordionItem key={bulletin.id} $open={isOpen}>
                <S.AccordionButton type="button" onClick={() => onToggleBulletin(bulletin.id)} aria-expanded={isOpen}>
                  <S.ItemHeader>
                    <S.ItemTitle>{bulletin.title}</S.ItemTitle>
                    <S.ItemMeta>
                      {formatDate(bulletin.week_start_date)}
                      {bulletin.service_type ? ` · ${bulletin.service_type}` : ''}
                    </S.ItemMeta>
                  </S.ItemHeader>
                  <S.Chevron $open={isOpen} aria-hidden="true">{isOpen ? '−' : '+'}</S.Chevron>
                </S.AccordionButton>

                <S.PanelShell $open={isOpen}>
                  <S.Panel>
                    <S.ActionRow>
                      <S.PrimaryAction href={fileUrl} target="_blank" rel="noopener noreferrer">새 창에서 보기</S.PrimaryAction>
                      <S.SecondaryAction href={fileUrl} target="_blank" rel="noopener noreferrer" download>다운로드</S.SecondaryAction>
                    </S.ActionRow>
                    <S.ViewerBox>
                      {pdfFile ? (
                        <S.ViewerFrame src={toPdfEmbedUrl(fileUrl)} title={bulletin.title} />
                      ) : (
                        <S.ViewerImage src={fileUrl} alt={bulletin.title} loading="lazy" />
                      )}
                    </S.ViewerBox>
                  </S.Panel>
                </S.PanelShell>
              </S.AccordionItem>
            );
          })}
        </S.AccordionList>
      )}
    </S.Container>
  );
}
