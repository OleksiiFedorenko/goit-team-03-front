import { useState } from 'react';
import { Typography, Stack } from '@mui/material';

const initialFieldValues = {
  id: '',
  title: '',
  description: '',
  labelColor: '',
  deadline: new Date(),
};

const AddCardForm = () => {
  const [values, setValues] = useState(initialFieldValues);

  return (
    <Stack>
      <Typography>Add Card</Typography>;
    </Stack>
  );
};
export default AddCardForm;
