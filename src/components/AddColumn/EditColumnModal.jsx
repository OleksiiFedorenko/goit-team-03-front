import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { updateColumn } from 'store/boards/operations';
import { Box, FormControl, Typography, Button, SvgIcon, TextField } from '@mui/material';
import {container, button, form} from 'styles';
import sprite from 'components/Icons/sprite.svg';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

const EditColumnModal = ({ title, columnId, onCloseModal }) => { 
 const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(updateColumn({...values, columnId}));
    resetForm();
    onCloseModal();
  };

  return (
        <Box sx={container.addColumnContainer}>
        <Typography variant='h2' mb={3}>Edit column</Typography>

        <Formik
          initialValues={{title}}
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
                sx={{mb: 3}}
                value={values.title}
                onChange={handleChange}
              /> 
              <ErrorMessage
                name="Text"
                component="div"
                style={{ color: 'red',fontSize: 12 }}
              />  
            </FormControl>

            <Button
               color="primary"
               variant="contained"
               fullWidth
               sx={form.button}
               type="submit">
              <Box sx={button.boxIconPlus}>
                <SvgIcon sx={button.svgIconPlus}>
                  <svg stroke="currentColor">
                      <use href={sprite + '#icon-plus'} />
                  </svg>             
                </SvgIcon>
              </Box>                 
                Add
            </Button>
          </Form>
          )}
        </Formik>
        </Box>
  );
};

export default EditColumnModal;