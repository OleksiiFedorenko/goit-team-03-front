import { Typography, Stack } from '@mui/material';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Container } from '@mui/material';
import Textfield from '../FormsUI/TextField';
import SubmitButton from 'components/FormsUI/SubmitButton';

const initialValues = {
  title: '',
  description: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

const handleSubmit = values => {
  console.log(values);
  //setSubmitting(false);
  // resetForm();
  //onCloseModal();
};

const AddCardForm = () => {
  return (
    <Container>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Typography variant="h2" component="h2" mb={3}>
            Add card
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
            inputProps={{
              style: {
                height: '154px',
              },
            }}
          />
          <SubmitButton>Add</SubmitButton>
        </Form>
      </Formik>
    </Container>
  );
};
export default AddCardForm;
