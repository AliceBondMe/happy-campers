import styled from 'styled-components';
import road_view from '../assets/images/road_view.jpg';
import { fadeInLeft, fadeInRight } from 'assets/styles/GlobalStyles';

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const HeroWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 60px);
  margin: -32px -20px 32px -20px;
  overflow: hidden;
  background: center / cover no-repeat url(${road_view});

  @media screen and (min-width: 768px) {
    height: 520px;
    margin: -32px -64px 32px -64px;
  }
`;

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  color: var(--white);
  text-shadow: 2px 2px 12px var(--dark), 1px 1px 4px var(--dark);
`;

export const MainHeader = styled.h1`
  text-align: center;
  font-size: 28px;
  animation: ${fadeInLeft} 1.5s ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const MainText = styled.p`
  text-align: center;
  animation: ${fadeInRight} 1.5s ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Header = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

export const TextWrap = styled.div`
  width: 80vw;
  padding: 12px;
  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    width: 560px;
    padding: 32px;
    font-size: 16px;
    line-height: 1.6;
  }
`;

export const ImageWrap = styled.div`
  width: 80vw;
  height: 180px;
  border-radius: 16px;
  background-color: var(--bg-categories);
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 340px;
  }
`;

export const BlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
  animation: ${fadeInLeft} 1.5s ease-in-out;

  @media screen and (min-width: 768px) {
    gap: 60px;
    flex-direction: row;
    justify-content: center;
  }
`;

export const BlockRight = styled(BlockLeft)`
  animation: ${fadeInRight} 1.5s ease-in-out;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: var(--button);
  text-align: center;
`;

export const Img404 = styled.img`
  margin: 20px auto 0 auto;
  height: 70vh;
  width: auto;
`;
