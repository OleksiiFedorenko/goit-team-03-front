import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: baseline;
`;

export const FormUser = styled(Form)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  font-family: Poppins;
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #161616;
`;

export const IconStyle = styled.svg`
  width: 14px;
  height: 14px;
  color: #161616;
  `;

  export const FormWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
`;
export const ErrorSection = styled(ErrorMessage)`
  padding-left: 14px;
  color: #c04d4d;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;
export const FormField = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  background-color:#ffffff;
  border: 1px solid #5255BC;
  outline: none;
  border-radius: 8px;

  color:#161616;
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color:#161616;
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const FormSubmit = styled.button`
  margin-top: 10px;
  padding: 14px;
  border: none;
  background: #5255BC;
  border-radius: 8px;

  font-family: 'Poppins';
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  color:#ffffff;

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;