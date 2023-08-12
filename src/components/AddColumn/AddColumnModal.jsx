import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addColumn } from 'store/boards/operations';
import { Icon } from 'components/Icons';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, FormControl, Typography, Button, TextField } from '@mui/material';
import { container, button, form, icon } from 'styles';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});
const initialValues = {
  title: '',
};

const AddColumnModal = ({ onCloseModal }) => {
  const { boardId } = useParams();
  const dispatch = useDispatch();

  const parentBoard = boardId;

  const handleSubmit = (values, { resetForm }) => {
    console.log({ ...values, parentBoard });
    dispatch(addColumn({ ...values, parentBoard }));
    resetForm();
    onCloseModal();
  };
  return (
    <Box sx={container.addColumnContainer}>
      <Typography variant="h2" mb={3}>
        Add column
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                label="Title"
                variant="outlined"
                type="text"
                id="text"
                name="title"
                sx={{ mb: 3 }}
                value={values.title}
                onChange={handleChange}
              />
              <ErrorMessage
                name="Title"
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
    </Box>
  );
};

export default AddColumnModal;
