import styled from '@emotion/styled';
import Link from 'next/link';
import { typography } from '@/styles/theme';

export const Container = styled.div`
  min-height: 100vh;
  padding: 140px 20px 90px;
  background: linear-gradient(180deg, #f6f4ef 0%, #f7f8fc 100%);
`;

export const Inner = styled.div`
  max-width: 780px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  ${typography.body2}
  color: #4c6891;
  text-decoration: none;
  margin-bottom: 28px;
  transition: color 150ms ease;

  &:hover {
    color: #1a3d69;
  }
`;

export const BackArrow = styled.span`
  font-size: 20px;
  line-height: 1;
`;

export const Article = styled.article`
  background: #fff;
  border: 1px solid #dbe2ee;
  border-radius: 16px;
  padding: 36px 40px 48px;

  @media (max-width: 600px) {
    padding: 24px 20px 36px;
  }
`;

export const ArticleHeader = styled.div`
  margin-bottom: 24px;
`;

export const ArticleTitle = styled.h1`
  ${typography.title3}
  margin: 0 0 10px;
  word-break: keep-all;
`;

export const ArticleMeta = styled.p`
  ${typography.body2}
  margin: 0;
  color: #6b7a99;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e4ebf4;
  margin: 0 0 28px;
`;

export const ArticleBody = styled.div`
  ${typography.body1}
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 1.9;
  color: #2c3e50;
`;
