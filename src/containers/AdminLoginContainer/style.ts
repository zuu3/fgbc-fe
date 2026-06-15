import styled from '@emotion/styled';
import { typography } from '@/styles/theme';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 20px 80px;
  background: #FAF8F5;
`;

export const Card = styled.section`
  width: 100%;
  max-width: 420px;
  background: #FFFFFF;
  border: 1px solid #E2D9CF;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 16px 40px rgba(28, 23, 18, 0.10);
`;

export const Title = styled.h1`
  ${typography.title6}
  color: #1C1712;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  ${typography.body2}
  color: #5C5349;
  line-height: 1.6;
  margin-bottom: 18px;
`;

export const Form = styled.form`
  display: grid;
  gap: 12px;
`;

export const Field = styled.div`
  display: grid;
  gap: 6px;

  label {
    ${typography.caption}
    color: #5C5349;
  }

  input {
    border: 1px solid #E2D9CF;
    border-radius: 10px;
    padding: 10px 12px;
    ${typography.body2}
    color: #1C1712;
    background: #FFFFFF;
    font-family: inherit;
    outline: none;
    transition: border-color 150ms ease;

    &:focus {
      border-color: #C4704A;
    }
  }
`;

export const SubmitButton = styled.button`
  margin-top: 6px;
  border: 1px solid #C4704A;
  background: #C4704A;
  color: #FAF8F5;
  border-radius: 10px;
  padding: 10px 12px;
  ${typography.body2}
  color: #FAF8F5;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 150ms ease, border-color 150ms ease;

  &:hover:not(:disabled) {
    background: #A85C38;
    border-color: #A85C38;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  ${typography.caption}
  color: #B32E43;
`;
