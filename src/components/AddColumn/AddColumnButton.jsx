import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Stack } from '@mui/material';
import AddColumnModal from './AddColumnModal';
// import { Icon } from 'components/Icons';

const AddColumnButton = () => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
    return (
        <Stack
      sx={{
          width: '100%',
        maxHeight: 56,
        maxWidth: 360,
        marginLeft: '15px',
      }}
    >
        <Button type='button' onClick={handleOpenModal} variant="contained" startIcon={<AddBoxIcon />}>
            Add another column
            </Button>
        <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
          <AddColumnModal  onCloseModal={handleCloseModal}/>
            </Modal>
       </Stack>
    )
}
export default AddColumnButton;