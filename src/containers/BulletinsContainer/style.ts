import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  padding: 140px 20px 90px;
  background: linear-gradient(180deg, #f6f4ef 0%, #f7f8fc 100%);
`;

export const Header = styled.header`
  max-width: 1080px;
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
  max-width: 1080px;
  margin: 0 auto 18px;
  color: #637086;
  font-size: 0.95rem;
`;

export const LatestCard = styled.article`
  max-width: 1080px;
  margin: 0 auto;
  padding: 28px;
  border-radius: 20px;
  background: linear-gradient(145deg, #10233d 0%, #1b3d68 60%, #365d89 100%);
  color: #fff;
`;

export const Badge = styled.p`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  font-size: 0.8rem;
  margin-bottom: 12px;
`;

export const LatestTitle = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 8px;
`;

export const Meta = styled.p`
  opacity: 0.9;
  margin-bottom: 4px;
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 18px;
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
  color: #173054;
  background: #fff;
`;

export const SecondaryAction = styled(ActionBase)`
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

export const Section = styled.section`
  max-width: 1080px;
  margin: 30px auto 0;
`;

export const ViewerHeader = styled.div`
  margin-bottom: 10px;
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

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 10px;
`;

export const Item = styled.li`
  border: 1px solid #dee5f0;
  border-radius: 12px;
  background: #fff;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #0f4f95;
    font-weight: 600;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 1rem;
`;

export const ItemMeta = styled.p`
  margin-top: 5px;
  color: #6f7786;
  font-size: 0.9rem;
`;
