import styled from '@emotion/styled';
import { typography, colors } from '@/styles/theme';

export const Container = styled.div`
  min-height: 100vh;
  padding: 140px 20px 90px;
  background: #FAF8F5;
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

export const SpinnerWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 48px 0;
`;

export const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 3px solid #E2D9CF;
  border-top-color: #C4704A;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export const AccordionList = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 14px;
`;

export const AccordionItem = styled.article<{ $open: boolean }>`
  border: 1px solid ${(props) => (props.$open ? '#E2D9CF' : '#E2D9CF')};
  border-radius: 14px;
  background: #FFFFFF;
  overflow: hidden;
  transition: border-color 220ms ease, box-shadow 220ms ease, transform 220ms ease;
  box-shadow: ${(props) => (props.$open ? '0 10px 26px rgba(28, 23, 18, 0.08)' : '0 4px 12px rgba(28, 23, 18, 0.03)')};
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
    background: rgba(250, 248, 245, 0.45);
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
  background: #F5F3EF;
  color: #C4704A;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${typography.title7}
  font-weight: 700;
  line-height: 1;
  transition: transform 220ms ease, background-color 220ms ease, color 220ms ease;
  transform: ${(props) => (props.$open ? 'rotate(180deg)' : 'rotate(0deg)')};
  background: ${(props) => (props.$open ? '#EDEBE6' : '#F5F3EF')};
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
  border-top: 1px solid #EEE8E1;
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
  color: #FAF8F5;
  background: #C4704A;
`;

export const SecondaryAction = styled(ActionBase)`
  color: #C4704A;
  border: 1px solid #C4704A;
`;

export const ViewerBox = styled.div`
  width: 100%;
  border: 1px solid #E2D9CF;
  border-radius: 10px;
  background: #FFFFFF;
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

export const LinkList = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 10px;
`;

export const LinkItem = styled.article`
  border: 1px solid #E2D9CF;
  border-radius: 14px;
  background: #FFFFFF;
  overflow: hidden;
  transition: border-color 180ms ease, box-shadow 180ms ease;

  &:hover {
    border-color: #E2D9CF;
    box-shadow: 0 6px 18px rgba(28, 23, 18, 0.07);
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
`;

export const LinkItemInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
`;

export const LinkItemBody = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LinkItemTitle = styled.h3`
  ${typography.title7}
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LinkItemDate = styled.p`
  ${typography.body2}
  margin: 0;
  color: #9A8F86;
`;

export const LinkItemArrow = styled.span`
  flex-shrink: 0;
  font-size: 22px;
  color: #E2D9CF;
  line-height: 1;
`;

export const TextContent = styled.div`
  ${typography.body1}
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 1.9;
  padding: 8px 4px 4px;
  color: #1C1712;
`;

export const LoadMoreWrapper = styled.div`
  max-width: 1100px;
  margin: 24px auto 0;
  display: flex;
  justify-content: center;
`;

export const LoadMoreButton = styled.button`
  ${typography.body2}
  font-weight: 600;
  color: #C4704A;
  background: transparent;
  border: 1px solid #C4704A;
  border-radius: 999px;
  padding: 10px 32px;
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover:not(:disabled) {
    background: #C4704A;
    color: #FAF8F5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

