import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import Modal from 'components/Modal/Modal';
import { UserWrapper, UserOptions, UserName, UserAvatar } from './User.styled';
import defaultAvatar from '../../images/user-default-avatar.png';

export const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const { name, avatar } = useSelector(selectUser);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <UserWrapper>
      <UserOptions type="button" onClick={handleOpenModal}>
        <UserName>{name}</UserName>
        {avatar ? (
          <UserAvatar src={avatar} alt={name} />
        ) : (
          <UserAvatar
            src={defaultAvatar}
            alt="Default Avatar"
            onClick={handleOpenModal}
            height={32}
            width={32}
          />
        )}
      </UserOptions>
      {showModal && (
        <Modal isOpenModal={showModal} onCloseModal={handleCloseModal} />
      )}
    </UserWrapper>
  );
};
