import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import TaskProImg from '../../images/taskPro-img.png';
import { NeedHelpForm } from './NeedHelpForm';
import { Box, Typography, Button, SvgIcon } from '@mui/material';
import { text, container } from 'styles';
import sprite from 'components/Icons/sprite.svg';

export const HelpBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Box sx={container.helpBannerContainer}>
      <Box
        component="img"
        src={TaskProImg}
        alt="TaskProHelperImg"
        sx={{
          width: 54,
          height: 78,
          marginTop: '14px', 
          marginLeft: '14px', 
          marginBottom: '14px'}}
      />
      <Typography component="p" variant='h4' sx={text.helpBannerText}>
        If you need help with&nbsp;<br/>
        <Typography component="span" sx={text.accent}>TaskPro</Typography>, check out our
        support resources or reach out to our customer support team.
      </Typography>
      <Button variant="text" onClick={handleOpenModal}>
        <SvgIcon sx={text.helpBannerIcon}>
              <svg width="20px" height="20px" stroke="currentColor" fill="none">
                <use href={sprite + '#icon-help-circle'} />
              </svg>
        </SvgIcon>
        <Typography component="span" sx={text.helpBannerButton}>Need help?</Typography>
      </Button>
      {showModal && (
        <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
          <NeedHelpForm 
            onCloseModal={handleCloseModal}
            title="Need help"
            type="Submit"/>
        </Modal>  
      )}
    </Box>
  );
};
