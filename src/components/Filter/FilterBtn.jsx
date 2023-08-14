import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { FilterBar } from './FilterBar';
import { Box, Button, SvgIcon, Typography } from '@mui/material';
import { Icon } from 'components/Icons';
import { icon } from 'styles';

export const FilterBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: {
            zeroUp: '74px',
            tablet: '88px',
            desktop: '82px',
          },
          right: {
            zeroUp: '20px',
            tablet: '32px',
            desktop: '24px',
          },
        }}
      >
        <Button
          sx={{
            textTransform: 'none',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
          type="button"
          onClick={handleOpenModal}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              transition: 'all 250ms linear',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <SvgIcon
              sx={{
                width: '14px',
                height: '14px',
                color: 'text.primary',
              }}
            >
              <Icon id={'filter'} sx={icon.filter} />
            </SvgIcon>
          </Box>
          <Typography
            sx={{
              color: 'text.primary',
            }}
          >
            Filters
          </Typography>
        </Button>
      </Box>
      <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
        <FilterBar />
      </Modal>
    </>
  );
};
