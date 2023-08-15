import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteColumn } from 'store/boards/operations';

import Modal from 'components/Modal/Modal';
import EditColumnModal from 'components/AddColumn/EditColumnModal';
import IconBtn from './IconBtn';
import { Card, Stack, Typography } from '@mui/material';
import { card } from 'styles';
import DeleteConfirmModal from 'components/DeleteConfirmModal/DeleteConfirmModal';

const ColumnHeader = ({ title, columnId }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [ShowDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowDeleteConfirmModal(false);
  };

  const handleDeleteColumn = () => {
    dispatch(deleteColumn(columnId));
    setShowDeleteConfirmModal(false);
  };

  const openDeleteConfirmModal = () => {
    setShowDeleteConfirmModal(true);
  };

  return (
    <>
      <Card sx={card.header}>
        <Stack sx={card.headerContainer}>
          <Typography component="h2" variant="h3">
            {title}
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconBtn onClick={handleOpenModal} iconId="pencil" />
            <IconBtn onClick={openDeleteConfirmModal} iconId="trash" />
          </Stack>
        </Stack>

        <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
          <EditColumnModal
            onCloseModal={handleCloseModal}
            columnId={columnId}
            title={title}
            type="Submit"
          />
        </Modal>
      </Card>

      <DeleteConfirmModal
        isOpenModal={ShowDeleteConfirmModal}
        onCloseModal={handleCloseModal}
        onConfirm={handleDeleteColumn}
        message="Are you sure you want to delete this column?"
        title="All your tasks in this column will be deleted too."
      />
    </>
  );
};
export default ColumnHeader;
