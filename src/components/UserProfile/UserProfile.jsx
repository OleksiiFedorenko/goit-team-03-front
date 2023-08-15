import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

import Modal from 'components/Modal/Modal';
import defaultAvatarViolet from '../../images/default-avatar-violet@1x.png';
// import defaultAvatarViolet2x from '../../images/default-avatar-violet@2x.png';
// import defaultAvatarViolet3x from '../../images/default-avatar-violet@3x.png';
import defaultAvatarLight from '../../images/default-avatar-light@1x.png';
// import defaultAvatarLight2x from '../../images/default-avatar-light@2x.png';
// import defaultAvatarLight3x from '../../images/default-avatar-light@3x.png';
import defaultAvatarDark from '../../images/default-avatar-dark@1x.png';
// import defaultAvatarDark2x from '../../images/default-avatar-dark@2x.png';
// import defaultAvatarDark3x from '../../images/default-avatar-dark@3x.png';
import { EditProfile } from '../EditProfile';

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
          srcSet={`${avatar} 1x, ${avatar} 2x, ${avatar} 3x`}
          alt="User avatar"
        />
      </Button>
      <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
        <EditProfile onCloseModal={handleCloseModal} type="Submit" />
      </Modal>
    </>
  );
};
