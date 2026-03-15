import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  padding: 140px 20px 90px;
  background: linear-gradient(180deg, #f6f4ef 0%, #f7f8fc 100%);
`;

export const Header = styled.header`
  max-width: 1100px;
  margin: 0 auto 24px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: #1c1c1c;
  margin: 0 0 8px;
`;

export const Description = styled.p`
  color: #5e6573;
  font-size: 1rem;
  margin: 0;
`;

export const StatusText = styled.p`
  max-width: 1100px;
  margin: 0 auto 18px;
  color: #637086;
  font-size: 0.95rem;
`;

export const AccordionList = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 14px;
`;

export const AccordionItem = styled.article<{ $open: boolean }>`
  border: 1px solid ${(props) => (props.$open ? '#9ab1d2' : '#dbe2ee')};
  border-radius: 14px;
  background: #fff;
  overflow: hidden;
`;

export const AccordionButton = styled.button`
  width: 100%;
  border: 0;
  background: transparent;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  text-align: left;
  cursor: pointer;
`;

export const ItemHeader = styled.div`
  min-width: 0;
`;

export const ItemTitle = styled.h3`
  margin: 0;
  color: #1c2533;
  font-size: 1.05rem;
  line-height: 1.45;
`;

export const ItemMeta = styled.p`
  margin: 6px 0 0;
  color: #5f6b7e;
  font-size: 0.9rem;
`;

export const Chevron = styled.span`
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #edf2fb;
  color: #1a3d69;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1;
`;

export const Panel = styled.div`
  border-top: 1px solid #e4ebf4;
  padding: 0 18px 18px;
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 10px;
  margin: 14px 0;
  flex-wrap: wrap;
`;

const ActionBase = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 9px 14px;
`;

export const PrimaryAction = styled(ActionBase)`
  color: #fff;
  background: #1a3d69;
`;

export const SecondaryAction = styled(ActionBase)`
  color: #1a3d69;
  border: 1px solid #b8c8de;
`;

export const ViewerBox = styled.div`
  width: 100%;
  border: 1px solid #d8e0ed;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
`;

export const ViewerFrame = styled.iframe`
  width: 100%;
  height: min(78vh, 1100px);
  min-height: 650px;
  border: none;

  @media (max-width: 768px) {
    min-height: 500px;
    height: 75vh;
  }
`;

export const ViewerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
