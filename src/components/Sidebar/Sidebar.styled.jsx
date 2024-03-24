import { fadeInLeft } from 'assets/styles/GlobalStyles';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 80vw;
  animation: ${fadeInLeft} 1s ease-in-out;

  @media screen and (min-width: 1440px) {
    width: 360px;
    margin-bottom: 0;
    animation: ${fadeInLeft} 1.5s ease-in-out;
  }
`;

export const MobileWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
