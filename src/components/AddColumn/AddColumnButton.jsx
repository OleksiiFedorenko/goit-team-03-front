import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import AddColumnModal from './AddColumnModal';
import { Button, Typography, Box, SvgIcon } from '@mui/material';
import { button } from 'styles';
import sprite from 'components/Icons/sprite.svg';

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
          <SvgIcon sx={button.svgIconPlusAnother}>
            <svg stroke="currentColor">
              <use href={sprite + '#icon-plus'} />
            </svg>
          </SvgIcon>
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
