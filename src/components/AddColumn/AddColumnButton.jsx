import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { Button, IconStyle, IconWrapper, Text } from './AddColumnButton.styled';
import AddColumnModal from './AddColumnModal';
import { Icon } from 'components/Icons';

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
      <Button type="button" onClick={handleOpenModal}>
        <IconWrapper>
          <IconStyle>
            <Icon id={'plus'} />
          </IconStyle>
        </IconWrapper>
        <Text>Add another column</Text>
      </Button>
      {showModal && (
        <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
          <AddColumnModal
            onCloseModal={handleCloseModal}
            title="New board"
            type="Submit"
            
          />
        </Modal>
      )}
    </>
  );
};
export default AddColumnButton;
