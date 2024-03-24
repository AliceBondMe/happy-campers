import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 24px) / 2);
  }
`;

export const Header = styled.div`
  margin-left: 56px;
  position: relative;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-left: 76px;
    margin-bottom: 24px;
  }

  & h4 {
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.33;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  &::before {
    content: '${({ $letter }) => $letter}';
    position: absolute;
    top: -4px;
    left: -56px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-categories);
    color: var(--button);
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;

    @media screen and (min-width: 768px) {
      top: -8px;
      left: -76px;
      width: 60px;
      height: 60px;
    }
  }
`;

export const Comment = styled.p`
  color: var(--text-light);
  margin-bottom: 24px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
