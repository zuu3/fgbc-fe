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

export default function BulletinsContainer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const bulletinIdParam = searchParams.get('bulletinId');
  const [bulletins, setBulletins] = useState<Bulletin[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const onSelectBulletin = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('bulletinId', id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const selectedBulletin = useMemo(() => {
    if (!bulletinIdParam) return bulletins[0] ?? null;
    return bulletins.find((item) => item.id === bulletinIdParam) ?? bulletins[0] ?? null;
  }, [bulletinIdParam, bulletins]);

  const selectedFileUrl = selectedBulletin ? resolveBulletinFileUrl(selectedBulletin.file_path) : '';
  const isPdfFile = selectedFileUrl.toLowerCase().includes('.pdf');

  return (
    <S.Container>
      <S.Header>
        <S.Title>주보</S.Title>
        <S.Description>매주 발행되는 교회 소식을 확인하세요.</S.Description>
      </S.Header>

      {isLoading && <S.StatusText>주보 불러오는 중...</S.StatusText>}
      {!isLoading && bulletins.length === 0 && <S.StatusText>등록된 주보가 없습니다.</S.StatusText>}

      {!isLoading && bulletins.length > 0 && selectedBulletin && (
        <S.ContentGrid>
          <S.Sidebar>
            <S.SidebarTitle>주보 목록</S.SidebarTitle>
            <S.List>
              {bulletins.map((bulletin) => (
                <S.ListButtonItem
                  key={bulletin.id}
                  type="button"
                  $active={selectedBulletin.id === bulletin.id}
                  onClick={() => onSelectBulletin(bulletin.id)}
                >
                  <S.ItemTitle>{bulletin.title}</S.ItemTitle>
                  <S.ItemMeta>{formatDate(bulletin.week_start_date)}</S.ItemMeta>
                </S.ListButtonItem>
              ))}
            </S.List>
          </S.Sidebar>

          <S.ViewerSection>
            <S.ViewerHeader>
              <S.ViewerTitle>{selectedBulletin.title}</S.ViewerTitle>
              <S.ViewerMeta>
                {formatDate(selectedBulletin.week_start_date)}
                {selectedBulletin.service_type ? ` · ${selectedBulletin.service_type}` : ''}
              </S.ViewerMeta>
              <S.ActionRow>
                <S.PrimaryAction href={selectedFileUrl} target="_blank" rel="noopener noreferrer">새 창에서 보기</S.PrimaryAction>
                <S.SecondaryAction href={selectedFileUrl} target="_blank" rel="noopener noreferrer" download>다운로드</S.SecondaryAction>
              </S.ActionRow>
            </S.ViewerHeader>
            <S.ViewerBox>
              {isPdfFile ? (
                <S.ViewerFrame src={selectedFileUrl} title={selectedBulletin.title} />
              ) : (
                <S.ViewerImage src={selectedFileUrl} alt={selectedBulletin.title} />
              )}
            </S.ViewerBox>
          </S.ViewerSection>
        </S.ContentGrid>
      )}
    </S.Container>
  );
}
