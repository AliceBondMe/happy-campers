import styled from 'styled-components';

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 95px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  line-height: 1.25;
  border: 1px solid var(--card-border);

  & span {
    text-align: center;
  }

  & svg {
    fill: var(--text-main);
    stroke: var(--text-main);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  &:first-of-type {
    margin-bottom: 32px;
  }

  &:last-of-type {
    margin-bottom: 64px;
  }

  & input[type='checkbox'],
  input[type='radio'] {
    display: none;
  }

  &
    input[type='checkbox']:checked
    + ${IconWrap},
    input[type='radio']:checked
    + ${IconWrap} {
    border: 1px solid var(--button);
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 48px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 1px;
    background-color: var(--card-border);
  }
`;
