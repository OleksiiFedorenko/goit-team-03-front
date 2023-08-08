import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

import Modal from 'components/Modal/Modal';
import defaultAvatarViolet from '../../images/default-avatar-violet.png';
import defaultAvatarLight from '../../images/default-avatar-light.png';
import defaultAvatarDark from '../../images/default-avatar-dark.png';

import { Button, Box } from '@mui/material';
import { button } from 'styles';

export const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const { name, avatarURL, theme } = useSelector(selectUser);

  let avatar = avatarURL;
  if (!avatar) {
    switch (theme) {
      case 'light':
        avatar = defaultAvatarLight;
        break;
      case 'dark':
        avatar = defaultAvatarDark;
        break;
      default:
        avatar = defaultAvatarViolet;
        break;
    }
  }

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button variant="text" sx={button.profile} onClick={handleOpenModal}>
        {name}
        <Box
          component="img"
          sx={button.profileImg}
          src={avatar}
          alt="User avatar"
        />
      </Button>
      <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
        <div></div>
      </Modal>
    </>
  );
};
