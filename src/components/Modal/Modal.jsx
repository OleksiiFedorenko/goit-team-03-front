import PropTypes from 'prop-types';
import { Box, Modal } from '@mui/material';
import { BtnClose } from './Modal.styled';
import { Icon } from 'components/Icons';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({ isOpenModal, onCloseModal, children }) => {
  return (
    <Modal open={isOpenModal} onClose={onCloseModal}>
      <Box sx={style}>
        <BtnClose onClick={onCloseModal}>
          <Icon id="x-close" />
        </BtnClose>
        {children}
      </Box>
    </Modal>
  );
};

ModalWindow.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalWindow;
