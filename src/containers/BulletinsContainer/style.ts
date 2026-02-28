import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  padding: 140px 20px 90px;
  background: linear-gradient(180deg, #f6f4ef 0%, #f7f8fc 100%);
`;

export const Header = styled.header`
  max-width: 1320px;
  margin: 0 auto 24px;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  color: #1c1c1c;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: #5e6573;
  font-size: 1rem;
`;

export const StatusText = styled.p`
  max-width: 1320px;
  margin: 0 auto 18px;
  color: #637086;
  font-size: 0.95rem;
`;

export const ContentGrid = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 20px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.section`
  border: 1px solid #dbe2ee;
  border-radius: 16px;
  background: #fff;
  padding: 14px;
  position: sticky;
  top: 104px;

  @media (max-width: 1024px) {
    position: static;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 1rem;
  color: #27364f;
  margin-bottom: 10px;
`;

export const ViewerSection = styled.section`
  border: 1px solid #dbe2ee;
  border-radius: 16px;
  background: #fff;
  padding: 18px;
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 14px;
  flex-wrap: wrap;
`;

const ActionBase = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 600;
  padding: 10px 16px;
`;

export const PrimaryAction = styled(ActionBase)`
  color: #fff;
  background: #1a3d69;
`;

export const SecondaryAction = styled(ActionBase)`
  color: #1a3d69;
  border: 1px solid #b8c8de;
`;

export const ViewerHeader = styled.div`
  margin-bottom: 12px;
`;

export const ViewerTitle = styled.h3`
  font-size: 1.35rem;
  color: #1c2533;
  margin-bottom: 6px;
`;

export const ViewerMeta = styled.p`
  color: #5f6b7e;
  font-size: 0.9rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 12px;
`;

export const List = styled.div`
  display: grid;
  gap: 8px;
`;

export const ListButtonItem = styled.button<{ $active: boolean }>`
  border: 1px solid ${(props) => (props.$active ? '#1a3d69' : '#dde4ef')};
  background: ${(props) => (props.$active ? '#eef4ff' : '#fff')};
  border-radius: 10px;
  padding: 12px;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: #1a3d69;
    background: #f5f8fe;
  }
`;

export const ViewerBox = styled.div`
  width: 100%;
  min-height: 620px;
  border: 1px solid #d8e0ed;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 460px;
  }
`;

export const ViewerFrame = styled.iframe`
  width: 100%;
  height: 70vh;
  min-height: 620px;
  border: none;

  @media (max-width: 768px) {
    min-height: 460px;
    height: 65vh;
  }
`;

export const ViewerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ItemTitle = styled.h3`
  font-size: 1rem;
`;

export const ItemMeta = styled.p`
  margin-top: 5px;
  color: #6f7786;
  font-size: 0.9rem;
`;
