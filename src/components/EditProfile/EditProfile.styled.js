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
export const UserAvatar = styled.img`
  `;
  export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
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
  width: 18px;
  height: 18px;
  color: #161616;
  `;
export const IconPlus = styled.svg`
  position: absolute;
  top: 98%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 550ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 24px;
  height: 24px;

  color1: var(--fill-icon-plus);
  color2: rgba(22, 22, 22, 1);
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
export const FieldAvatar = styled.input`
  display: none;
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