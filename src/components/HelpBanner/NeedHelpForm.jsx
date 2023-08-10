import { useDispatch } from "react-redux";
import { needHelp } from 'store/boards/operations';
import { Formik, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import Notiflix from "notiflix";
import { Typography, TextField, Button, FormControl, Box } from "@mui/material";
import {container} from 'styles';

const helpSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        {
          message: 'Invalid Email',
          excludeEmptyString: true,
        }
      )
      .required('Please, enter your email'),
    text: Yup.string()
      .required('Please, enter your comment'),
  });

export const NeedHelpForm = ({onCloseModal}) => {
    const dispatch = useDispatch();

     function handleSubmit(values, { resetForm }) {
        const { email, text } = values;
         dispatch(needHelp({ email, text }));
         Notiflix.Notify.info('Thank you for your request, we will answer you as soon as possible.');
         resetForm();
         onCloseModal();
    }

    return (   
      <Box sx={container.helpFormContainer}>
      <Typography variant="h2" mb={3}>
        Need help
      </Typography>
      <Formik
        initialValues={{ email: '', text: '' }}
        validationSchema={helpSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                name="email"
                label="Email address"
                variant="outlined"
                sx={{mb: 1.75}}
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginTop: -10,
                  marginBottom: 4,
                }}
              />
              <TextField
                name="text"
                label="Comment"
                variant="outlined"
                multiline
                rows={6}
                sx={{mb: 3}}
                value={values.text}
                onChange={handleChange}
              />
              <ErrorMessage
                name="text"
                component="div"
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginTop: -20,
                  marginBottom: 4,
                }}
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                sx={{ 
                  height: 49,
                  textTransform: 'none',
                 }}
                type="submit"
                disabled={isSubmitting}
              >
                Send
              </Button>
            </FormControl>
          </form>
        )}
      </Formik>
    </Box>     
    )
}


