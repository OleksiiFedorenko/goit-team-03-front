import PropTypes from 'prop-types';
import { Box, Modal } from '@mui/material';
import { BtnClose } from './Modal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({ isOpenModal, onCloseModal, children }) => {
  return (
    <Modal open={isOpenModal} onClose={onCloseModal}>
      <Box sx={style}>
        <BtnClose onClick={onCloseModal}>X</BtnClose>
        {children}
      </Box>
    </Modal>
  );
};

ModalWindow.propTypes = {
  isOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalWindow;
