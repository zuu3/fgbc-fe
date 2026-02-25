import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  padding: 140px 20px 90px;
  background: linear-gradient(180deg, #f4f6fb 0%, #f8f6ef 100%);
`;

export const Header = styled.header`
  max-width: 1120px;
  margin: 0 auto 20px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: #5f6775;
  line-height: 1.6;
`;

export const HeaderAction = styled.button`
  margin-top: 12px;
  border: 1px solid #cad3e3;
  background: #fff;
  color: #2b3d59;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
`;

export const TabRow = styled.div`
  max-width: 1120px;
  margin: 0 auto 14px;
  display: flex;
  gap: 8px;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  border: 1px solid ${(props) => (props.$active ? '#1e4c88' : '#c8d2e3')};
  color: ${(props) => (props.$active ? '#fff' : '#344154')};
  background: ${(props) => (props.$active ? '#1e4c88' : '#fff')};
  border-radius: 999px;
  padding: 10px 14px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
`;

export const Panel = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  border-radius: 16px;
  border: 1px solid #dce4f0;
  background: #fff;
  padding: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 12px;
`;

export const Form = styled.form`
  display: grid;
  gap: 0;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 12px;

  .full {
    grid-column: 1 / -1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: grid;
  gap: 6px;

  label {
    font-size: 0.82rem;
    color: #5d687b;
  }

  input,
  textarea,
  select {
    border: 1px solid #ccd5e3;
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 0.92rem;
    font-family: inherit;
    color: #253247;
    background: #fff;
  }
`;

export const CheckRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  label {
    font-size: 0.82rem;
    color: #5d687b;
  }
`;

export const FixedValue = styled.div`
  border: 1px solid #ccd5e3;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 0.92rem;
  color: #253247;
  background: #f8fbff;
`;

export const UploadRow = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    border: 1px solid #b6c3d9;
    border-radius: 8px;
    background: #fff;
    color: #26364f;
    padding: 7px 10px;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  span {
    font-size: 0.82rem;
    color: #637086;
    word-break: break-all;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;

  button {
    border: 1px solid #b6c3d9;
    border-radius: 10px;
    background: #fff;
    color: #26364f;
    padding: 9px 12px;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
  }

  .primary {
    border-color: #1e4c88;
    background: #1e4c88;
    color: #fff;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 10px;
`;

export const ListItem = styled.li`
  border: 1px solid #e1e7f2;
  border-radius: 12px;
  padding: 12px;
  background: #fbfcff;
`;

export const ListTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 3px 8px;
  font-size: 0.74rem;
  color: #1e4c88;
  background: #e3edff;
  margin-bottom: 8px;
`;

export const ListTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const ListMeta = styled.p`
  color: #637086;
  font-size: 0.86rem;
`;

export const ItemActions = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 6px;

  button {
    border: 1px solid #ccd7ea;
    background: #fff;
    color: #2a3a53;
    border-radius: 8px;
    font-size: 0.82rem;
    padding: 6px 10px;
    cursor: pointer;
  }
`;

export const Message = styled.p`
  margin-bottom: 10px;
  color: #1f4e88;
  font-size: 0.88rem;
`;
