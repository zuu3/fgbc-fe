import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { typography } from '@/styles/theme';

export const Container = styled.div`
  min-height: 100vh;
  padding: 140px 20px 90px;
  background: #FAF8F5;

  @media (max-width: 768px) {
    padding: 100px 14px 60px;
  }
`;

export const Header = styled.header`
  max-width: 1120px;
  margin: 0 auto 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const HeaderLeft = styled.div`
  min-width: 0;
`;

export const Title = styled.h1`
  ${typography.title6}
  color: #1C1712;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  ${typography.body2}
  color: #5C5349;
  line-height: 1.6;
  margin: 0;
`;

export const HeaderAction = styled.button`
  flex-shrink: 0;
  border: 1px solid #E2D9CF;
  background: #FFFFFF;
  color: #5C5349;
  border-radius: 999px;
  padding: 8px 16px;
  ${typography.caption}
  color: #5C5349;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 150ms ease, color 150ms ease;

  &:hover {
    border-color: #C4704A;
    color: #C4704A;
  }
`;

export const TabRow = styled.div`
  max-width: 1120px;
  margin: 0 auto 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  border: 1px solid ${(props) => (props.$active ? '#C4704A' : '#E2D9CF')};
  color: ${(props) => (props.$active ? '#FAF8F5' : '#5C5349')};
  background: ${(props) => (props.$active ? '#C4704A' : '#FFFFFF')};
  border-radius: 999px;
  padding: 8px 14px;
  ${typography.body2}
  color: ${(props) => (props.$active ? '#FAF8F5' : '#5C5349')};
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: background-color 150ms ease, border-color 150ms ease, color 150ms ease;

  ${(props) =>
    !props.$active &&
    css`
      &:hover {
        border-color: #c4704a;
        color: #c4704a;
      }
    `}
`;

export const TabBadge = styled.span<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  border-radius: 999px;
  padding: 0 5px;
  font-size: 0.72rem;
  font-weight: 700;
  background: ${(props) => (props.$active ? 'rgba(255,255,255,0.25)' : '#EEE8E1')};
  color: ${(props) => (props.$active ? '#FAF8F5' : '#9A8F86')};
`;

/* ── Two-panel layout ── */

export const TwoPanel = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  height: calc(100vh - 300px);
  min-height: 560px;
  max-height: 860px;
  border: 1px solid #E2D9CF;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(28, 23, 18, 0.06);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    height: unset;
    min-height: unset;
    max-height: unset;
  }
`;

export const ListPane = styled.div`
  border-right: 1px solid #E2D9CF;
  display: flex;
  flex-direction: column;
  min-height: 0;

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 1px solid #E2D9CF;
    max-height: 380px;
  }
`;

export const ListPaneHeader = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #EEE8E1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  flex-shrink: 0;
`;

export const ListPaneTitle = styled.h2`
  ${typography.body2}
  color: #1C1712;
  font-weight: 700;
  margin: 0;
`;

export const ListCount = styled.span`
  ${typography.caption}
  color: #9A8F86;
`;

export const ListSearch = styled.div`
  padding: 10px 14px;
  border-bottom: 1px solid #EEE8E1;
  background: #FFFFFF;
  flex-shrink: 0;

  input {
    width: 100%;
    border: 1px solid #E2D9CF;
    border-radius: 8px;
    padding: 7px 10px;
    ${typography.caption}
    color: #1C1712;
    background: #FAF8F5;
    font-family: inherit;
    outline: none;
    transition: border-color 150ms ease;
    box-sizing: border-box;

    &:focus {
      border-color: #C4704A;
      background: #FFFFFF;
    }

    &::placeholder {
      color: #C4B5A8;
    }
  }
`;

export const ListScroll = styled.div`
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #E2D9CF;
    border-radius: 2px;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li<{ $selected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-bottom: 1px solid #EEE8E1;
  cursor: pointer;
  background: ${(props) => (props.$selected ? '#FDF7F4' : '#FFFFFF')};
  border-left: 3px solid ${(props) => (props.$selected ? '#C4704A' : 'transparent')};
  transition: background-color 120ms ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${(props) => (props.$selected ? '#FDF7F4' : '#FAF8F5')};
  }
`;

export const ListItemBody = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ListTitle = styled.h3`
  ${typography.body2}
  color: #1C1712;
  font-weight: 600;
  margin: 0 0 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListMeta = styled.p`
  ${typography.caption}
  color: #9A8F86;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListTag = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 2px 7px;
  ${typography.caption}
  color: #C4704A;
  background: #EEE8E1;
  white-space: nowrap;
`;

export const ItemActions = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 150ms ease;

  ${ListItem}:hover & {
    opacity: 1;
  }
`;

export const EditButton = styled.button`
  border: 1px solid #E2D9CF;
  background: #FFFFFF;
  color: #5C5349;
  border-radius: 6px;
  ${typography.caption}
  color: #5C5349;
  padding: 3px 8px;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 150ms ease, color 150ms ease;

  &:hover {
    border-color: #C4704A;
    color: #C4704A;
  }
`;

export const DeleteButton = styled.button`
  border: 1px solid #F5C0C0;
  background: #FDF0F0;
  color: #8B1A2A;
  border-radius: 6px;
  ${typography.caption}
  color: #8B1A2A;
  padding: 3px 8px;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 150ms ease, border-color 150ms ease;

  &:hover {
    background: #FAE0E0;
    border-color: #E08080;
  }
`;

export const ModalOverlay = styled.div`
  inset: 0;
  background: rgba(28, 23, 18, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const ModalCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E2D9CF;
  border-radius: 16px;
  padding: 28px 28px 24px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 20px 60px rgba(28, 23, 18, 0.18);
`;

export const ModalTitle = styled.h2`
  ${typography.title7}
  color: #1C1712;
  margin: 0 0 8px;
`;

export const ModalDescription = styled.p`
  ${typography.body2}
  color: #5C5349;
  margin: 0 0 24px;
  word-break: keep-all;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const ModalCancelButton = styled.button`
  border: 1px solid #E2D9CF;
  background: #FFFFFF;
  color: #5C5349;
  border-radius: 8px;
  ${typography.body2}
  color: #5C5349;
  font-weight: 600;
  padding: 9px 18px;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 150ms ease, color 150ms ease;

  &:hover {
    border-color: #C4704A;
    color: #C4704A;
  }
`;

export const ModalDeleteButton = styled.button`
  border: 1px solid #8B1A2A;
  background: #8B1A2A;
  color: #FFFFFF;
  border-radius: 8px;
  ${typography.body2}
  color: #FFFFFF;
  font-weight: 600;
  padding: 9px 18px;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 150ms ease;

  &:hover {
    background: #6B1020;
    border-color: #6B1020;
  }
`;

export const EmptyState = styled.div`
  padding: 40px 20px;
  text-align: center;

  p {
    ${typography.body2}
    color: #9A8F86;
    margin: 0;
  }
`;

/* ── Editor pane ── */

export const EditorPane = styled.div<{ $editing?: boolean }>`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: ${(props) => (props.$editing ? '#FDF7F4' : '#FFFFFF')};
  transition: background-color 200ms ease;
`;

export const EditorPaneHeader = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #EEE8E1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-shrink: 0;
`;

export const EditorPaneTitle = styled.h2`
  ${typography.body2}
  color: #1C1712;
  font-weight: 700;
  margin: 0;
`;

export const CancelButton = styled.button`
  border: 1px solid #E2D9CF;
  background: #FFFFFF;
  color: #5C5349;
  border-radius: 6px;
  ${typography.caption}
  color: #5C5349;
  padding: 4px 12px;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 150ms ease, color 150ms ease;

  &:hover {
    border-color: #C4704A;
    color: #C4704A;
  }
`;

export const EditorBody = styled.div`
  padding: 24px;
  flex: 1;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const EditorEmptyState = styled.div`
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #9A8F86;
  text-align: center;

  p {
    ${typography.body2}
    color: #9A8F86;
    margin: 0;
  }

  span {
    ${typography.caption}
    color: #C4704A;
    opacity: 0.6;
  }
`;

export const Message = styled.p<{ $type?: 'success' | 'error' | 'info' }>`
  ${typography.caption}
  margin: 0 0 16px;
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 500;

  ${(props) =>
    props.$type === 'success' &&
    css`
      color: #2d6a4f;
      background: #e8f5ef;
      border: 1px solid #b7dfc9;
    `}

  ${(props) =>
    props.$type === 'error' &&
    css`
      color: #8b1a2a;
      background: #fdf0f0;
      border: 1px solid #f5c0c0;
    `}

  ${(props) =>
    (!props.$type || props.$type === 'info') &&
    css`
      color: #C4704A;
      background: #FDF7F4;
      border: 1px solid #EEE8E1;
    `}
`;

export const Form = styled.form`
  display: grid;
  gap: 0;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 20px;

  .full {
    grid-column: 1 / -1;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: grid;
  gap: 6px;

  label {
    ${typography.caption}
    color: #5C5349;
    font-weight: 500;
  }

  input,
  textarea,
  select {
    border: 1px solid #E2D9CF;
    border-radius: 10px;
    padding: 10px 12px;
    ${typography.body2}
    color: #1C1712;
    background: #FFFFFF;
    font-family: inherit;
    outline: none;
    transition: border-color 150ms ease, box-shadow 150ms ease;

    &:focus {
      border-color: #C4704A;
      box-shadow: 0 0 0 3px rgba(196, 112, 74, 0.12);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

export const CheckRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  label {
    ${typography.caption}
    color: #5C5349;
  }
`;

export const FixedValue = styled.div`
  border: 1px solid #E2D9CF;
  border-radius: 10px;
  padding: 10px 12px;
  ${typography.body2}
  color: #5C5349;
  background: #F5F3EF;
`;

export const FileInputArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid #E2D9CF;
  border-radius: 10px;
  background: #FAF8F5;
  cursor: pointer;
  transition: border-color 150ms ease;

  &:hover {
    border-color: #C4704A;
  }

  input[type='file'] {
    display: none;
  }
`;

export const FileInputLabel = styled.label`
  flex-shrink: 0;
  border: 1px solid #E2D9CF;
  border-radius: 8px;
  background: #FFFFFF;
  color: #5C5349;
  padding: 6px 12px;
  ${typography.caption}
  color: #5C5349;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 150ms ease, color 150ms ease;

  &:hover {
    border-color: #C4704A;
    color: #C4704A;
  }
`;

export const FileInputName = styled.span`
  ${typography.caption}
  color: #9A8F86;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
`;

export const UploadRow = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  button {
    border: 1px solid #C4704A;
    border-radius: 8px;
    background: #C4704A;
    color: #FAF8F5;
    padding: 7px 16px;
    ${typography.caption}
    color: #FAF8F5;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background-color 150ms ease;

    &:hover:not(:disabled) {
      background: #A85C38;
      border-color: #A85C38;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  span {
    ${typography.caption}
    color: #9A8F86;
    word-break: break-all;
  }
`;

export const PdfImportRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 12px;
  border: 1px dashed #E2D9CF;
  border-radius: 10px;
  background: #F5F3EF;

  input[type='file'] {
    flex: 1;
    min-width: 0;
    ${typography.caption}
    color: #5C5349;
  }

  input[type='password'] {
    width: 180px;
    border: 1px solid #E2D9CF;
    border-radius: 8px;
    padding: 8px 10px;
    ${typography.caption}
    color: #1C1712;
    background: #FFFFFF;
    font-family: inherit;
    outline: none;
    transition: border-color 150ms ease;

    &:focus {
      border-color: #C4704A;
    }
  }

  button {
    border: 1px solid #C4704A;
    border-radius: 8px;
    background: #C4704A;
    color: #FAF8F5;
    padding: 8px 14px;
    ${typography.caption}
    color: #FAF8F5;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    font-family: inherit;
    transition: background-color 150ms ease;

    &:hover:not(:disabled) {
      background: #A85C38;
      border-color: #A85C38;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    button { text-align: center; }
  }
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 4px;

  button {
    border: 1px solid #E2D9CF;
    border-radius: 10px;
    background: #FFFFFF;
    color: #1C1712;
    padding: 9px 16px;
    ${typography.body2}
    color: #1C1712;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background-color 150ms ease, border-color 150ms ease, color 150ms ease;

    &:hover {
      border-color: #C4704A;
      color: #C4704A;
    }
  }

  .primary {
    border-color: #C4704A;
    background: #C4704A;
    color: #FAF8F5;

    &:hover {
      background: #A85C38;
      border-color: #A85C38;
      color: #FAF8F5;
    }
  }
`;
