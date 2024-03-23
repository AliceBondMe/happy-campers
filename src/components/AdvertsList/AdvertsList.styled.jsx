import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LoadMoreButton = styled.button`
  padding: 16px 32px;
  border-radius: 200px;
  width: max-content;
  height: 56px;
  background-color: inherit;
  border: 1px solid var(--card-border);
  color: inherit;
  font-weight: 500;
  letter-spacing: -0.08px;
  transition: border var(--transition-main);

  &:hover {
    border: 1px solid var(--button);
  }
`;
