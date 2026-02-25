'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import * as S from './style';
import { getPublishedBulletins, resolveBulletinFileUrl } from '@/lib/content/client';
import type { Bulletin } from '@/types/content';
import { formatKstDate } from '@/lib/dateTimeKst';

function formatDate(dateText: string): string {
  return formatKstDate(dateText);
}

export default function BulletinsContainer() {
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

  const latestBulletin = useMemo(() => bulletins[0] ?? null, [bulletins]);
  const previousBulletins = useMemo(() => bulletins.slice(1), [bulletins]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>주보</S.Title>
        <S.Description>매주 발행되는 교회 소식을 확인하세요.</S.Description>
      </S.Header>

      {isLoading && <S.StatusText>주보 불러오는 중...</S.StatusText>}

      {latestBulletin && (
        <S.LatestCard>
          <S.Badge>최신 주보</S.Badge>
          <S.LatestTitle>{latestBulletin.title}</S.LatestTitle>
          <S.Meta>{formatDate(latestBulletin.week_start_date)}</S.Meta>
          <S.Meta>{latestBulletin.service_type}</S.Meta>
          <S.ActionRow>
            <S.PrimaryAction href={resolveBulletinFileUrl(latestBulletin.file_path)} target="_blank" rel="noopener noreferrer">주보 보기</S.PrimaryAction>
            <S.SecondaryAction href={resolveBulletinFileUrl(latestBulletin.file_path)} target="_blank" rel="noopener noreferrer">다운로드</S.SecondaryAction>
          </S.ActionRow>
        </S.LatestCard>
      )}

      <S.Section>
        <S.SectionTitle>지난 주보</S.SectionTitle>
        {isLoading ? null : previousBulletins.length === 0 ? (
          <S.StatusText>지난 주보가 없습니다.</S.StatusText>
        ) : (
          <S.List>
            {previousBulletins.map((bulletin) => (
              <S.Item key={bulletin.id}>
                  <div>
                    <S.ItemTitle>{bulletin.title}</S.ItemTitle>
                    <S.ItemMeta>{formatDate(bulletin.week_start_date)}</S.ItemMeta>
                  </div>
                  <Link href={resolveBulletinFileUrl(bulletin.file_path)} target="_blank" rel="noopener noreferrer">보기</Link>
                </S.Item>
              ))}
          </S.List>
        )}
      </S.Section>
    </S.Container>
  );
}
