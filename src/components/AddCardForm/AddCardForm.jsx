import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Container } from '@mui/material';
import Textfield from '../FormsUI/TextField';
import SubmitButton from 'components/FormsUI/SubmitButton';
import PriorityRadioBtn from 'components/FormsUI/RadioButtons/PriorityRadioBtn';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography, RadioGroup, FormLabel, FormControl } from '@mui/material';
import DatePicker from 'components/FormsUI/DatePicker/DatePicker';

const initialValues = {
  title: '',
  description: '',
  deadline: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  deadline: Yup.date().required(),
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
  const [priority, setPriority] = useState('without');

  const handleChangePriority = event => {
    setPriority(event.target.value);
  };

  const handleSubmit = values => {
    // changing the deadline to the needed format
    const formattedDate = values.deadline.split('-').reverse().join('-');

    dispatch(
      taskOperation({
        ...values,
        parentColumn,
        priority,
        taskId,
        deadline: formattedDate,
      })
    );
    //setSubmitting(false);
    // resetForm();
    onCloseModal();
  };
  return (
    <Container>
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
            label="Title"
            sx={{
              marginBottom: '14px',
            }}
          />
          <Textfield
            name="description"
            label="Description"
            multiline={true}
            rows={6}
            sx={{
              marginBottom: '24px',
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
          <Typography variant="body2" component="h4" mb={0.5}>
            Deadline
          </Typography>
          <DatePicker
            name="deadline"
            sx={{
              marginBottom: '40px',
            }}
          />
          <SubmitButton>{buttonTitle}</SubmitButton>
        </Form>
      </Formik>
    </Container>
  );
};
export default AddCardForm;
