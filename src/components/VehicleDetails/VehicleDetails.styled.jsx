import styled from 'styled-components';

export const Header = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 48px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 1px;
    background-color: var(--card-border);
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 17px;

  & span:nth-child(2) {
    text-transform: capitalize;
  }
`;
