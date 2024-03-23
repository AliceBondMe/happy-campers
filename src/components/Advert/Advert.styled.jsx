import styled from 'styled-components';

export const AdvertCard = styled.div`
  display: flex;
  gap: 24px;
  width: 888px;
  height: 358px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid var(--card-border);
`;

export const ImgWrap = styled.div`
  width: 290px;
  height: 310px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--bg-categories);

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  & h2,
  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Header = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 370px;
`;

export const FavButton = styled.button`
  padding: 0;
  background-color: transparent;

  & svg {
    fill: ${({ $isFav }) => ($isFav ? 'var(--button)' : 'none')};
    stroke: ${({ $isFav }) => ($isFav ? 'var(--button)' : 'var(--text-main)')};
  }
`;

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

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
`;

export const Description = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 525px;
  color: var(--text-light);
`;

export const Button = styled.button`
  padding: 16px 40px;
  border-radius: 200px;
  width: 166px;
  height: 56px;
  background-color: var(--button);
  color: var(--white);
  font-weight: 500;
  letter-spacing: -0.08px;
  transition: background-color var(--transition-main);

  &:hover {
    background-color: var(--button-hover);
  }
`;
