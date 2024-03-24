import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;

  & ul:first-of-type {
    margin-bottom: 8px;
  }

  & ul:nth-child(2) {
    margin-bottom: 44px;
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 24px) / 2);
  }
`;
