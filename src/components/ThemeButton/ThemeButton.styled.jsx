import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity var(--transition-main);

  &:hover {
    opacity: 1;
  }
`;
