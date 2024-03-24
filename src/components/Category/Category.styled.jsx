import styled from 'styled-components';

export const CategoryItem = styled.p`
  display: inline-flex;
  padding: 4px 8px;
  align-items: center;
  gap: 8px;
  background-color: var(--bg-categories);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;

  & svg {
    fill: var(--text-main);
    stroke: var(--text-main);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    padding: 12px 18px;
  }
`;
