import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  color: var(--text-light);
  font-weight: 500;
  margin-bottom: 8px;
`;

export const InputWrap = styled.div`
  position: relative;

  & svg {
    transition: stroke var(--transition-main);
  }
`;

export const Input = styled.input`
  padding: 18px 18px 18px 44px;
  border-radius: 10px;
  border: none;
  color: var(--text-main);
  background-color: var(--bg-input);
  font-size: 14px;
  line-height: 1.25;
  margin-bottom: 32px;
  position: relative;

  &:focus + div > svg {
    stroke: var(--button);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 18px;
  left: 18px;

  & svg {
    stroke: var(--text-main);
  }
`;
