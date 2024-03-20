import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 36px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: var(--text-main);
  background: var(--button);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & > a {
    font-weight: 600;
    display: flex;
    align-items: flex-end;
    gap: 4px;
  }

  & svg {
    stroke: var(--text-main);
    fill: var(--text-main);
  }
`;

export const NavBlock = styled.div`
  display: flex;
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: var(--basic-white);
  border: none;
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;
  }
`;
