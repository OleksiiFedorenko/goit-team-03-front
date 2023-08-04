import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import TaskProImg from '../../images/taskPro-img.png';
import {
  TaskProHelperWrapper,
  TaskProHelperImg,
  TaskProHelperText,
  TaskProHelperTextLink,
  TaskProHelperButton,
  TaskProHelperButtonText,
} from './TaskProHelper.styled';

export const TaskProHelper = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <TaskProHelperWrapper>
      <TaskProHelperImg
        src={TaskProImg}
        alt="TaskProHelperImg"
        width={54}
        height={78}
      ></TaskProHelperImg>
      <TaskProHelperText>
        If you need help with
        <TaskProHelperTextLink>TaskPro</TaskProHelperTextLink>, check out our
        support resources or reach out to our customer support team.
      </TaskProHelperText>
      <TaskProHelperButton type="button" onClick={handleOpenModal}>
        <TaskProHelperButtonText>Need help?</TaskProHelperButtonText>
      </TaskProHelperButton>
      {showModal && <Modal onCloseModal={handleCloseModal} />}
    </TaskProHelperWrapper>
  );
};
