import { fadeInRight } from 'assets/styles/GlobalStyles';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  animation: ${fadeInRight} 1s ease-in-out;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const LoadMoreButton = styled.button`
  padding: 8px 20px;
  border-radius: 200px;
  width: max-content;
  height: 44px;
  background-color: inherit;
  border: 1px solid var(--card-border);
  color: inherit;
  font-weight: 500;
  letter-spacing: -0.08px;
  transition: border var(--transition-main);

  &:hover {
    border: 1px solid var(--button);
  }

  @media screen and (min-width: 768px) {
    padding: 16px 32px;
    height: 56px;
  }
`;
