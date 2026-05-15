'use client';

import Link from 'next/link';
import * as S from './style';
import { formatKstDate } from '@/lib/dateTimeKst';
import type { Bulletin } from '@/types/content';

type Props = {
  bulletin: Bulletin;
  backHref: string;
  backLabel: string;
};

export default function TextBulletinDetailContainer({ bulletin, backHref, backLabel }: Props) {
  return (
    <S.Container>
      <S.Inner>
        <S.BackLink href={backHref}>
          <S.BackArrow aria-hidden="true">‹</S.BackArrow>
          {backLabel} 목록으로
        </S.BackLink>

        <S.Article>
          <S.ArticleHeader>
            <S.ArticleTitle>{bulletin.title}</S.ArticleTitle>
            <S.ArticleMeta>{formatKstDate(bulletin.week_start_date)}</S.ArticleMeta>
          </S.ArticleHeader>
          <S.Divider />
          <S.ArticleBody>{bulletin.content || '내용이 없습니다.'}</S.ArticleBody>
        </S.Article>
      </S.Inner>
    </S.Container>
  );
}
