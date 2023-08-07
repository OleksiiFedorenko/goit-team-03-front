import styled from 'styled-components';

export const Column = styled.div`
  position: absolute;
  top: 80px;
  right: 50px;
  width: 334px;
  height: 56px;
  padding: 14px 24px;
 

  display: flex;
 justify-content: space-between;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background: #fff;

`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const IconStyle = styled.svg`
  width: 16px;
  height: 16px;
  color: #16161680;
   cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    opacity: 0.4;
    transform: scale(1.4);
  }
`;

export const Text = styled.p`
  color: #161616;
  font-size: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  width: 230px;
`;