import { LinkStyled, Nav } from './Navigation.styled';

const Navigation = ({ closeMobileMenu }) => {
  return (
    <Nav>
      <LinkStyled to="/" onClick={closeMobileMenu}>
        Home
      </LinkStyled>
      <LinkStyled to="catalogue" onClick={closeMobileMenu}>
        Catalogue
      </LinkStyled>
      <LinkStyled to="favorites" onClick={closeMobileMenu}>
        Favorites
      </LinkStyled>
    </Nav>
  );
};

export default Navigation;
