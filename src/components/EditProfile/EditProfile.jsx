import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { updateProfile } from 'store/auth/operations';
import { Icon } from 'components/Icons';
import defaultAvatarViolet from '../../images/default-avatar-violet.png';
import defaultAvatarLight from '../../images/default-avatar-light.png';
import defaultAvatarDark from '../../images/default-avatar-dark.png';

import { icon, form, container, button } from 'styles';
import {
  Box,
  FormLabel,
  Typography,
  Input,
  TextField,
  Button,
} from '@mui/material';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters'),
  email: Yup.string().email('Invalid email'),
  password: Yup.string()
    .trim()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters'),
});
const initialValues = {
  name: '',
  email: '',
  password: '',
};
export const EditProfile = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { theme } = useSelector(selectUser);
  const [password, setPassword] = useState('password');
  const [currentImage, setCurrentImage] = useState(user.avatarURL);
  const [avatarURL, setAvatarURL] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    const formData = new FormData();
    if (avatarURL) {
      formData.append('avatarURL', avatarURL);
    }
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    dispatch(updateProfile(formData));
    resetForm();
    onCloseModal();
  };

  let avatar = avatarURL;
  if (!avatar) {
    switch (theme) {
      case 'light':
        avatar = defaultAvatarLight;
        break;
      case 'dark':
        avatar = defaultAvatarDark;
        break;
      default:
        avatar = defaultAvatarViolet;
        break;
    }
  }

  const handleClickShowPassword = () => setPassword(show => !show);
  function handleFileChange(event) {
    const file = event;
    if (!file) {
      return;
    }
    setAvatarURL(file);
    const reader = new FileReader();

    reader.onload = function (e) {
      setCurrentImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
  return (
    <Box sx={container.editUserWrapper}>
      <Typography variant={'h2'} mb={'24px'}>
        Edit profile
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box sx={form.editUserForm}>
            <FormLabel htmlFor="avatarURL" sx={form.editUserLabel}>
              <Box sx={container.editUserImgWrapper}>
                <Box
                  component="img"
                  src={currentImage || avatar}
                  alt="User picture"
                />
                <Box aria-label="add" sx={container.editUserPlusWrapper}>
                  <Icon id={'plus'} sx={icon.addProfileImg} />
                </Box>
              </Box>
            </FormLabel>
            <Input
              id="avatarURL"
              type="file"
              name="avatarURL"
              accept="image/*,.png,.jpg,.gif,.web"
              onChange={event => {
                handleFileChange(event.currentTarget.files[0]);
              }}
              sx={{ display: 'none' }}
            />
            <FormLabel sx={{ mb: '14px' }}>
              <ErrorMessage
                name="name"
                component="div"
                style={form.errorMessageEditUser}
              />
              <Field
                autoComplete="off"
                type="text"
                id="name"
                name="name"
                as={TextField}
                variant="outlined"
                placeholder={user.name}
                sx={form.editUserFielld}
              />
            </FormLabel>

            <FormLabel sx={{ mb: '14px' }}>
              <ErrorMessage
                name="email"
                component="div"
                style={form.errorMessageEditUser}
              />
              <Field
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                as={TextField}
                variant="outlined"
                placeholder={user.email}
                sx={form.editUserFielld}
              />
            </FormLabel>

            <FormLabel sx={{ mb: '24px' }}>
              <ErrorMessage
                name="password"
                component="div"
                style={form.errorMessageEditUser}
              />
              <Field
                autoComplete="off"
                type={password ? 'password' : 'text'}
                id="password"
                name="password"
                as={TextField}
                variant="outlined"
                placeholder="Enter your password"
                sx={form.editUserFielld}
              />
              <Button
                type="button"
                onClick={handleClickShowPassword}
                sx={button.editUserEye}
              >
                {password ? (
                  <Box>
                    <Icon id={'eye'} sx={icon.eye} />
                  </Box>
                ) : (
                  <Box>
                    <Icon id={'eye-off'} sx={icon.eye} />
                  </Box>
                )}
              </Button>
            </FormLabel>

            <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={{
                height: 49,
                textTransform: 'none',
              }}
              type="submit"
            >
              Send
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};
