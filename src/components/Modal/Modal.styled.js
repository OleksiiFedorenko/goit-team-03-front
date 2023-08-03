import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;
export const ModalEl = styled.div`
  position: relative;
  padding: 24px 24px 24px 24px;
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  /* background: var(--modal-bg-color);
  color: var(--first-text-color); */

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
