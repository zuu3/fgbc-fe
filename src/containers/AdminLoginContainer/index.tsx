'use client';

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import * as S from './style';

export default function AdminLoginContainer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/admin';
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl,
      });

      if (!res?.error) {
        router.push(callbackUrl);
        router.refresh();
      } else {
        setError('로그인에 실패했습니다. 계정 정보를 확인해 주세요.');
      }
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
        <S.Description>이메일과 비밀번호를 입력하여 로그인하세요.</S.Description>

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
