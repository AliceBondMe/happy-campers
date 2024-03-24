import { ErrorMessage, Field } from 'formik';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  border-radius: 10px;
  border: 1px solid var(--card-border);
  padding: 14px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 24px) / 2);
    padding: 24px;
  }
`;

export const Header = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;

  & + p {
    color: var(--text-light);
    margin-bottom: 16px;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const InputField = styled(Field)`
  width: 100%;
  border-radius: 10px;
  background-color: var(--bg-input) !important;
  color: var(--text-main);
  padding: 8px;
  margin-bottom: 8px;
  border: none;
  line-height: 1.25;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    padding: 18px;
    margin-bottom: 14px;
    font-size: 16px;
  }
`;

export const DateInput = styled(DatePicker)`
  width: 100%;
  border-radius: 10px;
  background-color: var(--bg-input);
  color: var(--text-main);
  padding: 8px;
  margin-bottom: 8px;
  border: none;
  line-height: 1.25;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    padding: 18px;
    margin-bottom: 14px;
    font-size: 16px;
  }
`;

export const DateInputWrap = styled.div`
  position: relative;
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 8px;
  right: 18px;

  & svg {
    stroke: var(--text-main);
  }

  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;

export const TextareaField = styled(InputField)`
  margin-bottom: 24px;
  height: 114px;
  resize: none;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  text-transform: capitalize;
  font-size: 12px;
  line-height: 1.16;
  margin-top: -14px;
  margin-left: 8px;
  color: var(--button);
`;
