import styled from 'styled-components';

export const AdvertCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 90vw;
  padding: 12px;
  border-radius: 20px;
  border: 1px solid var(--card-border);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    width: 720px;
    padding: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
    width: 888px;
    height: 358px;
    padding: 24px;
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 220px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--bg-categories);

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 500px) {
    height: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 290px;
    height: 310px;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 525px;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & h2,
  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.25;

    @media screen and (min-width: 1440px) {
      font-size: 24px;
    }
  }
`;

export const Header = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;

  @media screen and (min-width: 768px) {
    max-width: 240px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 370px;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const FavButton = styled.button`
  padding: 0;
  background-color: transparent;

  & svg {
    fill: ${({ $isFav }) => ($isFav ? 'var(--button)' : 'none')};
    stroke: ${({ $isFav }) => ($isFav ? 'var(--button)' : 'var(--text-main)')};
    transition: stroke var(--transition-main);
  }

  & svg:hover {
    stroke: var(--button);
  }
`;

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    align-items: flex-start;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 14px;

  & p {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  & p:first-of-type svg {
    fill: var(--rating);
  }

  & p:last-of-type svg {
    stroke: var(--text-main);
  }

  & span {
    position: relative;
  }

  & span::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: 2px;
    width: 100%;
    height: 1px;
    background-color: var(--text-main);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    flex-direction: row;
    gap: 16px;
  }
`;

export const Description = styled.p`
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  max-height: 40px;
  color: var(--text-light);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    max-width: 350px;
    max-height: unset;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 525px;
  }
`;

export const Button = styled.button`
  padding: 8px 20px;
  border-radius: 200px;
  width: 128px;
  height: 44px;
  background-color: var(--button);
  color: var(--white);
  font-weight: 500;
  letter-spacing: -0.08px;
  transition: background-color var(--transition-main);

  &:hover {
    background-color: var(--button-hover);
  }

  @media screen and (min-width: 768px) {
    padding: 16px 40px;
    width: 166px;
    height: 56px;
  }
`;
