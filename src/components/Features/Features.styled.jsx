import styled from 'styled-components';

export const Wrap = styled.div`
  width: calc((100% - 24px) / 2);

  & ul:first-of-type {
    margin-bottom: 8px;
  }

  & ul:nth-child(2) {
    margin-bottom: 44px;
  }
`;
