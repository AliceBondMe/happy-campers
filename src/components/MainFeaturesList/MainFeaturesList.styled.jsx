import styled from 'styled-components';

export const CategoriesList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
