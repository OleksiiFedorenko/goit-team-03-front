import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Icon } from 'components/Icons';
import Modal from 'components/Modal/Modal';
import EditColumnModal from 'components/AddColumn/EditColumnModal';
import { deleteColumn } from 'store/boards/operations';

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
    <div>
      <Card>
        <CardHeader title={title} />
        <IconButton onClick={handleOpenModal}>
          <Icon id={'pencil'} />
        </IconButton>
        <IconButton onClick={handleDeleteColumn}>
          <Icon id={'trash'} />
        </IconButton>

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
    </div>
  );
};
export default ColumnHeader;
