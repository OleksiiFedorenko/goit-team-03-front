import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from 'store/auth/selectors';
// import { updateProfile } from 'store/auth/operations';
import { Icon } from 'components/Icons';
import { EditWrapper, IconStyle, Title, FormUser, FormWrapper, ErrorSection, FormSubmit, FormField} from './EditProfile.styled';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, and one lowercase letter'
    ),
});
const initialValues = {
    name: '',
    email: '',
    password: '',
};
const EditProfile = ({ onCloseModal}) => {

    const handleSubmit = (values, { resetForm }) => {
        resetForm();
        onCloseModal();
    }
    return (
    <EditWrapper>
            <Title>Edit profile</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={UserSchema}
          onSubmit={handleSubmit}>
        {/* <IconStyle>
            <Icon id={"plus"} />
        </IconStyle> */}
        <FormUser>
            <FormWrapper>
                <ErrorSection name="name" component="div" />
                <FormField type="text" id="name" name="name" placeholder="Enter your name" />
            </FormWrapper>
            <FormWrapper>
                <ErrorSection name="email" component="div" />
                <FormField type="email" id="email" name="email" placeholder="Enter your email" />
            </FormWrapper>
            <FormWrapper>
                <ErrorSection name="password" component="div" />
                <FormField
            //   type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"/>
            </FormWrapper>
                <FormSubmit type="submit">Send</FormSubmit>
            </FormUser>
        </Formik>
    </EditWrapper>  
   ) 
}

export default EditProfile;