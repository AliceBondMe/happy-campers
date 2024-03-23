import { LinkStyled, Nav } from './Navigation.styled';

const Navigation = ({ closeMobileMenu }) => {
  return (
    <Nav>
      <LinkStyled to="/" onClick={closeMobileMenu}>
        Home
      </LinkStyled>
      <LinkStyled to="catalog" onClick={closeMobileMenu}>
        Catalog
      </LinkStyled>
      <LinkStyled to="favorites" onClick={closeMobileMenu}>
        Favorites
      </LinkStyled>
    </Nav>
  );
};

export default Navigation;
