import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteColumn } from 'store/boards/operations';

import Modal from 'components/Modal/Modal';
import EditColumnModal from 'components/AddColumn/EditColumnModal';
import IconBtn from './IconBtn';
import { Card, Stack, Typography } from '@mui/material';

const ColumnHeader = ({ title, columnId }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteColumn = () => {
    if (window.confirm(`Do you really want to delete column ${title}?`)) {
      dispatch(deleteColumn(columnId));
    }
  };

  return (
    <Card sx={{ paddingY: '18px', paddingX: '20px' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography component="h2" variant="h3" color="text.primary">
          {title}
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconBtn onClick={handleOpenModal} iconId="pencil" />
          <IconBtn onClick={handleDeleteColumn} iconId="trash" />
        </Stack>
      </Stack>
      {showModal && (
        <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
          <EditColumnModal
            onCloseModal={handleCloseModal}
            columnId={columnId}
            title={title}
            type="Submit"
          />
        </Modal>
      )}
    </Card>
  );
};
export default ColumnHeader;
