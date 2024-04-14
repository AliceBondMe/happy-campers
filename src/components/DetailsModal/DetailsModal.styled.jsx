import { fadeInScale } from 'assets/styles/GlobalStyles';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 90%;
  max-height: 90vh;
  border-radius: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding: 12px;
  background-color: var(--bg-modal);
  animation: ${fadeInScale} 700ms ease-in-out;

  &::-webkit-scrollbar-track {
    margin: 12px 0;
  }

  @media screen and (min-width: 1440px) {
    width: 982px;
    padding: 40px;
  }
`;

export const Backdrop = styled.div`
  z-index: 1200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--backdrop);
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  color: var(--text-main);
  border: none;
  cursor: pointer;

  & svg {
    stroke: var(--text-main);
    transition: stroke var(--transition-main);
  }

  & svg:hover {
    stroke: var(--button);
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const Price = styled.p`
  margin-top: 12px;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: 24px;
  }
`;

export const Gallery = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-bottom: 14px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 24px;
  }
`;

export const ImageWrap = styled.li`
  width: 100%;
  height: 200px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--bg-categories);

  & img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 500px) {
    height: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 700px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 284px;
    height: 310px;
  }
`;

export const Description = styled.p`
  color: var(--text-light);
  margin-bottom: 20px;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 44px;
  }
`;
