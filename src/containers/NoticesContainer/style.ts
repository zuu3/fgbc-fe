import styled from '@emotion/styled';

const categoryColor = {
  worship: '#5b3b00',
  event: '#0c4a6e',
  group: '#3f2f7f',
  volunteer: '#166534',
  urgent: '#9f1239',
} as const;

export const Container = styled.div`
  min-height: 100vh;
  padding: 140px 20px 90px;
  background: linear-gradient(180deg, #f6f4ef 0%, #eff4ff 100%);
`;

export const Header = styled.header`
  max-width: 1080px;
  margin: 0 auto 22px;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: #5e6573;
`;

export const MonthControl = styled.div`
  max-width: 1080px;
  margin: 0 auto 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    border: 1px solid #cad4e6;
    background: #fff;
    border-radius: 999px;
    padding: 8px 14px;
    font-size: 0.9rem;
    cursor: pointer;
  }

  strong {
    min-width: 130px;
    text-align: center;
  }
`;

export const Grid = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  border: 1px solid #d8e0ee;
  background: #fff;
`;

export const DayHeader = styled.div`
  background: #f1f5fc;
  padding: 12px 8px;
  text-align: center;
  border-bottom: 1px solid #d8e0ee;
  font-weight: 600;
`;

export const DayCell = styled.button<{ $isCurrentMonth: boolean; $isSelected: boolean }>`
  border: none;
  border-right: 1px solid #edf1f8;
  border-bottom: 1px solid #edf1f8;
  min-height: 102px;
  text-align: left;
  padding: 8px;
  background: ${(props) => (props.$isSelected ? '#e9f2ff' : props.$isCurrentMonth ? '#fff' : '#f8fafc')};
  color: ${(props) => (props.$isCurrentMonth ? '#222' : '#9aa3b4')};
  cursor: pointer;

  &:nth-of-type(7n) {
    border-right: none;
  }
`;

export const DateNumber = styled.p`
  font-size: 0.9rem;
  margin-bottom: 6px;
`;

export const DotRow = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export const Dot = styled.span<{ $category: keyof typeof categoryColor }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => categoryColor[props.$category]};
`;

export const ListSection = styled.section`
  max-width: 1080px;
  margin: 26px auto 0;
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

export const EmptyText = styled.p`
  color: #6f7786;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 10px;
`;

export const Item = styled.li`
  border: 1px solid #dde4ef;
  border-radius: 12px;
  background: #fff;
  padding: 14px;
`;

export const Tag = styled.span`
  display: inline-block;
  font-size: 0.78rem;
  border-radius: 999px;
  padding: 3px 8px;
  background: #e8eef9;
  color: #2b4f88;
  margin-bottom: 8px;
`;

export const ItemTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 6px;
`;

export const ItemDesc = styled.p`
  color: #48566c;
  margin-bottom: 6px;
  line-height: 1.6;
`;

export const ItemMeta = styled.p`
  color: #6f7786;
  font-size: 0.88rem;
`;
