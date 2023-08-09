import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import EditColumnModal from './EditColumnModal';
import { Column, IconStyle, IconWrapper } from './EditColumnButton.styled';
// import {
//   Column,
//   IconStyle,
//   IconWrapper,
//   Text,
// } from './EditColumnButton.styled';
import { Icon } from 'components/Icons';

const EditColumnButton = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Column>
      <IconWrapper>
        {/* <Text>In progress</Text> */}
        <IconStyle onClick={handleOpenModal}>
          <Icon id={'pencil'} />
        </IconStyle>
        <IconStyle>
          <Icon id={'trash'} />
        </IconStyle>
      </IconWrapper>
      {showModal && (
        <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
          <EditColumnModal onCloseModal={handleCloseModal} type="Submit" />
        </Modal>
      )}
    </Column>
  );
};
export default EditColumnButton;
