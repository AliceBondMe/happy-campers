import styled from 'styled-components';

export const List = styled.ul`
  width: calc((100% - 24px) / 2);
`;

export const Header = styled.div`
  margin-left: 76px;
  position: relative;
  margin-bottom: 24px;

  & h4 {
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
  }

  &::before {
    content: '${({ $letter }) => $letter}';
    position: absolute;
    top: -8px;
    left: -76px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-categories);
    color: var(--button);
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
  }
`;

export const Comment = styled.p`
  color: var(--text-light);
  margin-bottom: 24px;
`;
