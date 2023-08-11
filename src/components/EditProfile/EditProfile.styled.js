import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: baseline;
  width: 350px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
export const FormIcon = styled.span`
  position: relative;
  display: block;
`;
export const ImgWrapper = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 0px 11px 0px rgba(82, 85, 188, 1);
    transform: scale(1.1);
  }

  &:hover svg {
    top: 50%;
    box-shadow: 0px 0px 11px 0px rgba(82, 85, 188, 1);
  }
`;
export const Title = styled.h2`
  font-family: Poppins;
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #161616;
`;
export const Label = styled.label`
  width: 68px;
  height: 79px;
  margin: 25px auto 0 auto;
  cursor: pointer;
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
  color: rgba(22, 22, 22, 1);
`;
export const FormWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
`;
export const ErrorSection = styled(ErrorMessage)`
  padding-left: 14px;
  color: #c04d4d;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;
export const FormSection = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FieldAvatar = styled.input`
  display: none;
`;
export const FormField = styled(Field)`
  width: 352px;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  background-color: #ffffff;
  border: 1px solid #5255bc;
  outline: none;
  border-radius: 8px;

  color: #161616;
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color: #161616;
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;
export const Eye = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);

  background-color: transparent;
  border: none;
  opacity: 0.4000000059604645;
`;
export const FormSubmit = styled.button`
  width: 352px;
  height: 49px;
  margin-top: 10px;
  padding: 14px;
  border: none;
  background: #5255bc;
  border-radius: 8px;

  font-family: 'Poppins';
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #ffffff;

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
