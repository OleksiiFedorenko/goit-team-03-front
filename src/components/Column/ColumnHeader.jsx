import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteColumn } from 'store/boards/operations';

import Modal from 'components/Modal/Modal';
import EditColumnModal from 'components/AddColumn/EditColumnModal';
import IconBtn from './IconBtn';
import { Card, CardHeader, Box } from '@mui/material';
import { card } from 'styles';

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
    <Card sx={card.header}>
      <CardHeader
        title={title}
        sx={card.headerText}
        disableTypography
        action={
          <div>
            <Box>
              <IconBtn onClick={handleOpenModal} iconId="pencil" />
            </Box>
            <Box>
              <IconBtn onClick={handleDeleteColumn} iconId="trash" />
            </Box>
          </div>
        }
      />

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
