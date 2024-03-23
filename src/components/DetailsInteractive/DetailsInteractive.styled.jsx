import styled from 'styled-components';

export const TabList = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 68px;
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

export const TabButton = styled.button`
  position: relative;
  background-color: inherit;
  color: inherit;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 5px;
    background-color: var(--button);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
