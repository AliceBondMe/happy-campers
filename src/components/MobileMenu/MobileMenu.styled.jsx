import { fadeInRight } from 'assets/styles/GlobalStyles';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  padding-top: 160px;
  background-color: var(--bg-main);
  animation: ${fadeInRight} 700ms ease-in-out;
`;
