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
  color: var(--white);
  background: linear-gradient(
    to right,
    var(--header) 0%,
    var(--header-accent) 15%,
    var(--dark) 30%,
    var(--dark) 70%,
    var(--header-accent) 85%,
    var(--header) 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & > a {
    font-weight: 600;
    display: flex;
    align-items: flex-end;
    gap: 4px;
    transition: text-shadow var(--transition-main);

    &:hover {
      text-shadow: 1px 1px 12px;
    }
  }

  & svg {
    stroke: var(--white);
    fill: var(--white);
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
    transition: fill var(--transition-main);
  }

  &:hover svg {
    fill: var(--button);
  }
`;
