import PropTypes from 'prop-types';
import { Box, Modal, Button, Typography } from '@mui/material';
import { container } from 'styles';

const DeleteConfirmModal = ({
  isOpenModal,
  onCloseModal,
  onConfirm,
  message,
  title,
}) => {
  return (
    <Modal open={isOpenModal} onClose={onCloseModal}>
      <Box sx={container.modal}>
        <Box>
          <Typography
            variant="body1"
            sx={{
              marginBottom: '8px',
            }}
          >
            {message}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: '24px',
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              marginBottom: '8px',
            }}
          >
            <Button onClick={onCloseModal}>No</Button>
            <Button onClick={onConfirm}>Yes</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

DeleteConfirmModal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default DeleteConfirmModal;
