import styled from 'styled-components';

export const Button = styled.button`
  /* position: absolute;
  top: 80px;
  left: 650px; */
  width: 334px;
  height: 56px;
  padding: 14px 79px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background: #fff;
  outline: none;
  border: none;

  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const IconWrapper = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #5255bc;
  transition: all 250ms linear;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const IconStyle = styled.svg`
  width: 14px;
  height: 14px;
  color: #ffffff;
`;

export const Text = styled.p`
  color: #161616;
  font-size: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  width: 150px;
`;
