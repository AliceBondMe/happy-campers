import { fadeInScale } from 'assets/styles/GlobalStyles';
import { LoadMoreButton } from 'components/AdvertsList/AdvertsList.styled';
import styled from 'styled-components';

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 64px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25;
  border: 1px solid var(--card-border);

  & span {
    text-align: center;
  }

  & svg {
    fill: var(--text-main);
    stroke: var(--text-main);
  }

  @media screen and (min-width: 768px) {
    width: 96px;
    height: 76px;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 112px;
    height: 95px;
    font-size: 16px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  &:first-of-type {
    margin-bottom: 16px;
  }

  &:last-of-type {
    margin-bottom: 32px;
  }

  & input[type='checkbox'],
  input[type='radio'] {
    display: none;
  }

  &
    input[type='checkbox']:checked
    + ${IconWrap},
    input[type='radio']:checked
    + ${IconWrap} {
    border: 1px solid var(--button);
  }

  @media screen and (min-width: 768px) {
    &:first-of-type {
      margin-bottom: 24px;
    }

    &:last-of-type {
      margin-bottom: 48px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      margin-bottom: 32px;
    }

    &:last-of-type {
      margin-bottom: 64px;
    }
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
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
    margin-bottom: 48px;
    font-size: 20px;
  }
`;

export const ResetButton = styled(LoadMoreButton)`
  padding: 8px 20px;
  height: 44px;
  margin-left: 16px;

  @media screen and (min-width: 768px) {
    padding: 16px 32px;
    height: 56px;
  }
`;

export const ModalFilter = styled.div`
  width: 90vw;
  max-height: 90vh;
  border-radius: 20px;
  scroll-behavior: smooth;
  padding: 10px;
  background-color: var(--bg-modal);
  animation: ${fadeInScale} 700ms ease-in-out;
`;

export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 32px;
  height: 32px;
  background-color: transparent;
  color: var(--text-main);
  border: none;
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;
    transition: stroke var(--transition-main);
  }

  &:hover svg {
    stroke: var(--button);
  }
`;
