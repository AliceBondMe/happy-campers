import styled from 'styled-components';

export const TabList = styled.ul`
  display: flex;
  gap: 40px;
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
    margin-bottom: 68px;
  }
`;

export const TabButton = styled.button`
  position: relative;
  background-color: inherit;
  color: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  transition: color var(--transition-main);

  &:hover {
    color: var(--button);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 5px;
    background-color: var(--button);

    @media screen and (min-width: 768px) {
      bottom: -24px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
