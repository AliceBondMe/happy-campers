import styled from 'styled-components';

export const CategoryItem = styled.p`
  display: inline-flex;
  padding: 12px 18px;
  align-items: center;
  gap: 8px;
  background-color: var(--bg-categories);
  border-radius: 100px;
  font-weight: 500;
  line-height: 1.25;

  & svg {
    fill: var(--text-main);
    stroke: var(--text-main);
  }
`;
