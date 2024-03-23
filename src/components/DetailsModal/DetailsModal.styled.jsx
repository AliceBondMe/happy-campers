import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 982px;
  max-height: 90vh;
  border-radius: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding: 40px;
  background-color: var(--bg-modal);

  &::-webkit-scrollbar-track {
    margin: 12px 0;
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
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  color: var(--text-main);
  border: none;
  cursor: pointer;

  & svg {
    stroke: var(--text-main);
  }
`;

export const Price = styled.p`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const Gallery = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 24px;
`;

export const ImageWrap = styled.li`
  width: 284px;
  height: 310px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--bg-categories);

  & img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.p`
  color: var(--text-light);
  margin-bottom: 44px;
`;
