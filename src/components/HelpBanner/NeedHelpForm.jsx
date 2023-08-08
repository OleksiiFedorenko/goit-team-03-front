import { useDispatch } from "react-redux";
import { needHelp } from 'store/boards/operations';
import { Formik, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import Notiflix from "notiflix";
import { Typography, TextField, Button, FormControl } from "@mui/material";

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

    function handleSubmit(value) {
       const { email, text } = value;
      dispatch(needHelp({ email, text }))
      Notiflix.Notify.info('Thank you for your request, we will answer you as soon as possible.')
        onCloseModal()
    }
    return (   
        <>
        <Typography variant="h2" mb={2}>Need help</Typography>
        <Formik
          initialValues={{ email: '', text: '' }}
          validationSchema={helpSchema}
          onSubmit={(value, { resetForm }) => {
            handleSubmit(value);
            resetForm();
          }}>
            <FormControl fullWidth>
            <TextField 
              type="email" 
              name="email" 
              variant="outlined"
              style={{marginBottom: 14}}
              placeholder="Email address" 
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{
                  color: 'red',
                  fontSize: 14,
                }}
              />
            <TextField
              type="text" 
              name="text"
              variant="outlined"
              placeholder="Comment"
              multiline
              rows={6}
              style={{marginBottom: 24}}
               />
              <ErrorMessage
                name="text"
                component="div"
                style={{
                  color: 'red',
                  fontSize: 14,
                }}
              />
            <Button 
              color="primary" 
              variant="contained" 
              fullWidth 
              style={{ textTransform: 'none' }}
              type="submit">
                Send
            </Button>
            </FormControl>
        </Formik>
        </>    
    )
}

