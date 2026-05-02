import styled from '@emotion/styled';
import { typography, colors } from '@/styles/theme';

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
  ${typography.title3}
  margin: 0 0 8px;
`;

export const Description = styled.p`
  ${typography.body1}
  margin: 0;
`;

export const StatusText = styled.p`
  ${typography.body2}
  max-width: 1100px;
  margin: 0 auto 18px;
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
  transition: border-color 220ms ease, box-shadow 220ms ease, transform 220ms ease;
  box-shadow: ${(props) => (props.$open ? '0 10px 26px rgba(76, 104, 145, 0.08)' : '0 4px 12px rgba(76, 104, 145, 0.03)')};
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
  transition: background-color 180ms ease;

  &:hover {
    background: rgba(237, 242, 251, 0.45);
  }
`;

export const ItemHeader = styled.div`
  min-width: 0;
`;

export const ItemTitle = styled.h3`
  ${typography.title7}
  margin: 0;
`;

export const ItemMeta = styled.p`
  ${typography.body2}
  margin: 6px 0 0;
`;

export const Chevron = styled.span<{ $open: boolean }>`
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #edf2fb;
  color: #1a3d69;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${typography.title7}
  font-weight: 700;
  line-height: 1;
  transition: transform 220ms ease, background-color 220ms ease, color 220ms ease;
  transform: ${(props) => (props.$open ? 'rotate(180deg)' : 'rotate(0deg)')};
  background: ${(props) => (props.$open ? '#dfe9f8' : '#edf2fb')};
`;

export const PanelShell = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${(props) => (props.$open ? '1fr' : '0fr')};
  opacity: ${(props) => (props.$open ? 1 : 0)};
  transition: grid-template-rows 280ms ease, opacity 220ms ease;
`;

export const Panel = styled.div`
  min-height: 0;
  overflow: hidden;
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
  ${typography.caption}
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

