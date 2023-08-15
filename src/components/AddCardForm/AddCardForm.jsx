import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Container } from '@mui/material';
import Textfield from '../FormsUI/TextField';
import SubmitButton from 'components/FormsUI/SubmitButton';
import { Calendar } from 'components/Calendar';
import PriorityRadioBtn from 'components/FormsUI/RadioButtons/PriorityRadioBtn';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  Typography,
  RadioGroup,
  FormLabel,
  FormControl,
  Box,
} from '@mui/material';

import { formatDate } from 'helpers/formatDate';
import { getDeadlineInfo } from 'helpers/getDeadlineInfo';
import { container } from 'styles';

const initialValues = {
  title: '',
  description: '',
  deadline: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  deadline: Yup.mixed(),
});

const AddCardForm = ({
  parentColumn,
  onCloseModal,
  formTitle,
  buttonTitle,
  taskOperation,
  taskId,
  initData,
}) => {
  const dispatch = useDispatch();
  const [deadline, setDeadline] = useState(Date.now());
  const [priority, setPriority] = useState('without');

  const setDateValue = value => {
    setDeadline(value);
  };

  const handleChangePriority = event => {
    setPriority(event.target.value);
  };

  const handleSubmit = values => {
    dispatch(
      taskOperation({
        ...values,
        parentColumn,
        priority,
        taskId,
        deadline: formatDate(deadline.$d),
      })
    );
    onCloseModal();
  };

  return (
    <Container sx={container.cardForm}>
      <Formik
        initialValues={initData ? initData : initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Typography variant="h2" component="h2" mb={3}>
            {formTitle}
          </Typography>
          <Textfield
            name="title"
            placeholder="Title"
            style={{marginBottom: '14px'}}
            sx={{
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: 'border.input',
              },
              '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: 'border.input',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'border.input',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'border.input',
              },
            }}
          />
          <Textfield
            name="description"
            placeholder="Description"
            multiline={true}
            rows={6}
            style={{marginBottom: '24px'}}
            sx={{
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: 'border.input',
              },
              '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: 'border.input',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'border.input',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'border.input',
              },
            }}
          />

          <FormControl>
            <FormLabel
              id="priority-radios"
              sx={{
                fontSize: 12,
                lineHeight: 1.5,
                letterSpacing: '-0.02em',
                color: 'GrayText',
              }}
            >
              Label color
            </FormLabel>
            <RadioGroup
              sx={{
                marginBottom: '14px',
              }}
              row
              defaultValue="low"
              aria-labelledby="priority-radios"
              name="priority"
              value={priority}
              onChange={handleChangePriority}
            >
              <FormControlLabel
                value="low"
                control={<PriorityRadioBtn priority="low" />}
              />
              <FormControlLabel
                value="medium"
                control={
                  <PriorityRadioBtn priority="medium" sx={{ ml: '-14px' }} />
                }
              />
              <FormControlLabel
                value="high"
                control={
                  <PriorityRadioBtn priority="high" sx={{ ml: '-14px' }} />
                }
              />
              <FormControlLabel
                value="without"
                control={
                  <PriorityRadioBtn priority="without" sx={{ ml: '-14px' }} />
                }
              />
            </RadioGroup>
          </FormControl>
          <Box mb={5}>
            <Typography variant="body2" component="h4" mb={0.5}>
              Deadline
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>{getDeadlineInfo(deadline)}</Box>
              <Calendar parentState={setDateValue} />
            </Box>
          </Box>
          <SubmitButton>{buttonTitle}</SubmitButton>
        </Form>
      </Formik>
    </Container>
  );
};
export default AddCardForm;
