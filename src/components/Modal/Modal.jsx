import PropTypes from 'prop-types';
import { Box, Modal } from '@mui/material';
import { Icon } from 'components/Icons';
import { button, container, icon } from 'styles';

const ModalWindow = ({ isOpenModal, onCloseModal, children }) => {
  return (
    <Modal open={isOpenModal} onClose={onCloseModal}>
      <Box sx={container.modal}>
        <Box onClick={onCloseModal} sx={button.closeBtn}>
          <Icon id={'x-close'} sx={icon.svgClose} />
        </Box>
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
