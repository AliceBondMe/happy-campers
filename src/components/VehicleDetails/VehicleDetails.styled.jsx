import styled from 'styled-components';

export const Header = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background-color: var(--card-border);

    @media screen and (min-width: 768px) {
      bottom: -24px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 48px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 36px;

    @media screen and (min-width: 768px) {
      margin-bottom: 12px;
    }
  }

  & span:nth-child(2) {
    text-transform: capitalize;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    margin-bottom: 17px;
  }
`;
