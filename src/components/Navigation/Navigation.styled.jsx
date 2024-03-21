import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 12px;

  @media screen and (max-width: 639px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkStyled = styled(NavLink)`
  &.active {
    /* text-decoration: underline; */
    text-shadow: 1px 1px 12px;
  }
`;
