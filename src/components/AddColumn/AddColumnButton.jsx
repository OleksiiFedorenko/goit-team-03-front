import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { Icon } from 'components/Icons';
import AddColumnModal from './AddColumnModal';
import { Button, Typography, Box } from '@mui/material';
import { button, icon } from 'styles';

const AddColumnButton = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Button
        sx={button.addColumnBtn}
        color="secondary"
        onClick={handleOpenModal}
      >
        <Box sx={button.boxIconPlusAnother}>
          <Icon id={'plus'} sx={icon.svgAddColumn} />
        </Box>
        <Typography variant="h3">Add another column</Typography>
      </Button>
      <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
        <AddColumnModal
          onCloseModal={handleCloseModal}
          title="New board"
          type="Submit"
        />
      </Modal>
    </>
  );
};
export default AddColumnButton;
