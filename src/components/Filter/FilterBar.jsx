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
import { useDispatch, useSelector } from 'react-redux';
import { setPrioFilter } from 'store/filters/filtersSlice';
import { selectPrioFilter } from 'store/filters/selectors';

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
  const currentPrio = useSelector(selectPrioFilter);
  const [filter, setFilter] = useState(currentPrio);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrioFilter(filter));
  }, [dispatch, filter]);

  return (
    <Container
      sx={{
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
              control={<PriorityRadioBtn priority="without" />}
            />
            <CustomControlLabel
              label="Low"
              value="low"
              sx={{ ...ctrlLabelStyles }}
              control={<PriorityRadioBtn priority="low" />}
            />
            <CustomControlLabel
              label="Medium"
              value="medium"
              sx={ctrlLabelStyles}
              control={<PriorityRadioBtn priority="medium" />}
            />
            <CustomControlLabel
              label="High"
              value="high"
              sx={ctrlLabelStyles}
              control={<PriorityRadioBtn priority="high" />}
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="text"
          sx={{
            ...ctrlLabelStyles,
            textDecorationLine: 'underline',
            textTransform: 'none',
            height: 18,
          }}
          style={
            filter === 'all'
              ? { pointerEvents: 'none', textDecoration: 'none' }
              : null
          }
          onClick={() => {
            setFilter('all');
          }}
          type="button"
        >
          <Typography>{filter === 'all' ? 'Shown all' : 'Show all'}</Typography>
        </Button>
      </div>
    </Container>
  );
};
