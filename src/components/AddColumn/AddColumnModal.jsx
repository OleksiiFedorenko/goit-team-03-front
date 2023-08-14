import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addColumn } from 'store/boards/operations';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, FormControl, Typography } from '@mui/material';
import { container } from 'styles';
import Textfield from '../FormsUI/TextField';
import SubmitButton from 'components/FormsUI/SubmitButton';
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
              <Textfield name="title" label="Title" sx={{ mb: 3 }} />
            </FormControl>
            <SubmitButton>{'Add'}</SubmitButton>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddColumnModal;
