import PropTypes from 'prop-types';
import { Box, Modal, Button, Typography } from '@mui/material';
import { container } from 'styles';

const DeleteConfirmModal = ({ isOpenModal, onCloseModal, onConfirm }) => {
  return (
    <Modal open={isOpenModal} onClose={onCloseModal}>
      <Box sx={container.modal}>
        <Box>
          <Typography variant="body1">
            Are you sure you want to delete this item?
          </Typography>
          <Typography variant="body2">
            All your columns/tasks in this item will be deleted too.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
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
