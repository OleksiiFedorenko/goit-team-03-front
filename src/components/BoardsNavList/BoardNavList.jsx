import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material';
import { Icon } from 'components/Icons';

export const BoardNavList = ({ boards }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box sx={{ width: '100%', m: '0', p: '0' }}>
      <List
        component="nav"
        sx={{ width: '100%', m: '0', p: '0', color: 'text.sideSecond' }}
      >
        {boards.map((board, index) => {
          return (
            <ListItemButton
              key={board._id}
              component={NavLink}
              to={board._id}
              sx={[
                {
                  '&:focus': {
                    color: 'text.sideMain',
                    backgroundColor: 'background.sideSecond',
                  },
                },
              ]}
              selected={selectedIndex === index}
              onClick={event => handleListItemClick(event, index)}
            >
              <Icon id={board.icon} />

              <ListItemText primary={board.title} />

              <IconButton
                color="inherit"
                size="small"
                sx={[
                  {
                    '&:focus': {
                      color: 'secondary',
                      backgroundColor: 'background.sideSecond',
                    },
                  },
                ]}
              >
                <Icon id={'pencil'} />
              </IconButton>
              <IconButton size="small" color="inherit">
                <Icon id={'trash'} />
              </IconButton>
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};


