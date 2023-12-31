import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { updateColumn } from 'store/boards/operations';
import {
  Box,
  Container,
  FormControl,
  Typography,
  Button,
  TextField,
} from '@mui/material';
import { Icon } from 'components/Icons';
import { container, button, form, icon } from 'styles';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

const EditColumnModal = ({ title, columnId, onCloseModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(updateColumn({ ...values, columnId }));
    resetForm();
    onCloseModal();
  };

  return (
    <Container sx={container.cardForm}>
      <Typography variant="h2" mb={3}>
        Edit column
      </Typography>

      <Formik
        initialValues={{ title }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                placeholder="Title"
                variant="outlined"
                type="text"
                id="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                sx={{ 
                  mb: 3,
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
              <ErrorMessage
                name="Text"
                component="div"
                style={{ color: 'red', fontSize: 12 }}
              />
            </FormControl>

            <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={form.button}
              type="submit"
            >
              <Box sx={button.boxIconPlus}>
                <Icon id={'plus'} sx={icon.plusAdd} />
              </Box>
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default EditColumnModal;
