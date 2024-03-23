import styled from 'styled-components';

export const Text = styled.p`
  color: var(--text-light);
  font-weight: 500;
  margin-bottom: 8px;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 18px 18px 18px 44px;
  border-radius: 10px;
  border: none;
  color: var(--text-main);
  background-color: var(--bg-input);
  line-height: 1.25;
  margin-bottom: 32px;
  position: relative;
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 18px;
  left: 18px;

  & svg {
    stroke: var(--text-main);
  }
`;
