import styled from '@emotion/styled';

export const ButtonThemes = styled.button`
  margin-right: 14px;
  width: 64px;
  color: #ffffff80;
  font-size: 14px;
  background-color: inherit;
  border: none;
`;

export const ThemesPanelWrapper = styled.div`
  position: absolute;
  top: 0px;
  rigth: 0px;
  width: 98px;
  height: 105px;
  background-color: #151515;
  color: #ffffff50;
  border-radius: 10%;
  border: 1px solid #bedbb0;
  z-index: 1;
`;
export const ThemeOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px;
`;
export const ThemeOption = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: ${props => (props.active ? `#bedbb0` : '#ffffff50')};
`;
