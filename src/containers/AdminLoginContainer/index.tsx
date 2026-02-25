'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './style';

export default function AdminLoginContainer() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const json = await response.json().catch(() => ({} as {
          error?: string;
          details?: { role?: string | null; fallbackRole?: string | null };
        }));
        if (response.status === 403) {
          const roleText = json?.details?.role ? String(json.details.role) : '없음(null)';
          const fallbackRoleText = json?.details?.fallbackRole ? String(json.details.fallbackRole) : '없음(null)';
          setError(`관리자 권한이 없습니다. role: ${roleText}, fallbackRole: ${fallbackRoleText}`);
          return;
        }
        setError('로그인에 실패했습니다. 계정을 확인해 주세요.');
        return;
      }

      router.replace('/admin');
      router.refresh();
    } catch {
      setError('로그인 요청 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.Title>관리자 로그인</S.Title>
        <S.Description>Supabase Auth 계정으로 로그인하세요.</S.Description>

        <S.Form onSubmit={onSubmit}>
          <S.Field>
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </S.Field>

          <S.Field>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </S.Field>

          {error && <S.ErrorText>{error}</S.ErrorText>}

          <S.SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? '로그인 중...' : '로그인'}
          </S.SubmitButton>
        </S.Form>
      </S.Card>
    </S.Container>
  );
}
