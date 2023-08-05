import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { Form, Field, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 302px;
`;

export const Input = styled(Field)`
  display: block;
  width: 302px;
  box-sizing: border-box;
  // background-color: ;
  border: 1px solid black;
  border-radius: 8px;
  padding: 14px 18px;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  // color: ;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 21px;
  letter-spacing: -2%;

  &:focus,
  &:hover {
    /* color: ;
    border-color:  */
  }
`;

export const Text = styled(Typography)`
  // color: ;
  margin: 0;
  margin-bottom: 14px;
  text-align: left;
  font-size: 14px;
  font: 'Poppins';
  font-weight: 400;
  font-style: normal;
  line-height: 21px;
  letter-spacing: -2%;
`;

export const Label = styled.label`
  width: 100%;
  position: relative;
  display: block;
  margin-bottom: 24px;
`;

export const Icontainer = styled(Box)`
  display: flex;
  margin-bottom: 24px;
  gap: 8px;
`;

export const IconLabel = styled.label`
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: transparent;
  text-align: center;
  /* color:  */
  opacity: 0.5;

  &:hover,
  &:focus {
    /* color: */
    opacity: 1;
    scale: 1.2;
  }
`;

export const Icon = styled.div`
  /*     color: */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    /* color:  */
  }
`;

export const ImageWrap = styled(Box)`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 4px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const BgLabel = styled.label`
  display: block;
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;

  &:hover,
  &:focus {
    /* border: */
    scale: 1.2;
  }
`;

export const BoardIcon = styled(Box)`
  input {
    display: none;
  }

  input:checked + label {
    opacity: 1;
  }
`;

export const BoardBg = styled(Box)`
  input {
    display: none;
  }

  input:checked + label {
    opacity: 0.4;
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -21px;
  right: 0;
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -1%;
  opacity: 0.9;
  color: #e66666;
`;

export const Btn = styled(Button)`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  /* background-color: */
  padding: 14px 88px 14px 89px;
  padding-top: 10px;
  padding-bottom: 11px;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  width: 100%;
  /* color: */
  font-family: inherit;

  &:hover {
    opacity: 0.8;
  }

  span {
    line-height: 28px;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const IconWrap = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ;
  color:  */
  padding: 7px;
  border-radius: 8px;
  margin: 0;
`;
