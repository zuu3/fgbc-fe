import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 20px 80px;
  background: radial-gradient(900px 500px at 10% 0%, rgba(151, 193, 255, 0.35), transparent 60%),
    radial-gradient(900px 500px at 90% 100%, rgba(255, 222, 173, 0.4), transparent 60%),
    #f4f6fb;
`;

export const Card = styled.section`
  width: 100%;
  max-width: 420px;
  background: #fff;
  border: 1px solid #d9e2f0;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 16px 40px rgba(17, 30, 50, 0.12);
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 8px;
  color: #1b2a40;
`;

export const Description = styled.p`
  font-size: 0.92rem;
  color: #64718a;
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
    color: #52607a;
    font-size: 0.84rem;
  }

  input {
    border: 1px solid #cad5e7;
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 0.92rem;
    color: #1f2e44;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 6px;
  border: 1px solid #1c4a84;
  background: #1c4a84;
  color: #fff;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: #b32e43;
  font-size: 0.84rem;
`;
