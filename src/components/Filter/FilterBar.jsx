import { useEffect, useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
} from '@mui/material';
import PriorityRadioBtn from 'components/FormsUI/RadioButtons/PriorityRadioBtn';
import { CustomControlLabel } from './CustomControlLabel';

const ctrlLabelStyles = {
  color: 'text.filterRadio',
  fontFamily: 'Poppins',
  fontSize: 12,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  letterSpacing: -0.24,
};

export const FilterBar = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    console.log('filter: ', filter);
  }, [filter]);

  return (
    <Container
      sx={{
        // outline: '1px dashed tomato',
        width: 300,
        height: 234,
        p: 0,
      }}
    >
      <Typography
        sx={{
          borderBottom: 1,
          borderColor: 'rgba(255, 255, 255, 0.50)',
          paddingBottom: 1.75,
          marginBottom: 1.75,
        }}
        variant="h2"
        component="h2"
      >
        Filters
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 14,
        }}
      >
        <FormControl>
          <FormLabel
            sx={{
              color: 'text.primary',
              fontWeight: 500,
              fontStyle: 'normal',
              letterSpacing: '-0.28px',
              '&.Mui-focused': {
                color: 'text.primary',
              },
            }}
          >
            Label color
          </FormLabel>
          <RadioGroup
            value={filter}
            onChange={e => {
              setFilter(e.target.value);
            }}
          >
            <CustomControlLabel
              label="Without priority"
              value="without"
              sx={ctrlLabelStyles}
              control={<PriorityRadioBtn priority="Without" />}
            />
            <CustomControlLabel
              label="Low"
              value="low"
              sx={{ ...ctrlLabelStyles }}
              control={<PriorityRadioBtn priority="Low" />}
            />
            <CustomControlLabel
              label="Medium"
              value="medium"
              sx={ctrlLabelStyles}
              control={<PriorityRadioBtn priority="Medium" />}
            />
            <CustomControlLabel
              label="High"
              value="high"
              sx={ctrlLabelStyles}
              control={<PriorityRadioBtn priority="High" />}
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="text"
          sx={{
            ...ctrlLabelStyles,
            textDecorationLine: 'underline',
            textTransform: 'none',
            width: 48,
            height: 18,
            // outline: '1px dashed teal',
          }}
          onClick={() => {
            setFilter('all');
          }}
          type="button"
        >
          Show all
        </Button>
      </div>
    </Container>
  );
};
