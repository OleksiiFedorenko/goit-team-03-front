import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { updateProfile } from 'store/auth/operations';
import { Icon } from 'components/Icons';
import {
  Typography,
  TextField,
  Button,
  OutlinedInput,
  IconButton,
  FormControl,
  Box,
  // Stack,
  InputAdornment,
  Avatar,
//  InputLabel,
} from '@mui/material';
import defaultAvatarViolet from '../../images/default-avatar-violet.png';
// import defaultAvatarLight from '../../images/default-avatar-light.png';
// import defaultAvatarDark from '../../images/default-avatar-dark.png';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import {
  container,
  form,
  button
} from 'styles';

import { icon } from 'styles';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters'),
  email: Yup.string().email('Invalid email'),
  password: Yup.string()
    .trim()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters')
  
});
const initialValues = {
  name: '',
  email: '',
  password: '',
};
const EditProfileTest = ({ onCloseModal }) => {
  const dispatch = useDispatch();
    const user = useSelector(selectUser);
  // const { user, avatarURL, theme } = useSelector(selectUser);
  const [password, setPassword] = useState('password');
  const [currentImage, setCurrentImage] = useState(user.avatarURL);

  const handleClickShowPassword = () => setPassword(show => !show);

  const handleSubmit = (values, { resetForm }) => {
    const { avatarURL, name, email, password } = values;
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
//  let avatar = user.avatarURL;
//   if (!avatar) {
//     switch (theme) {
//       case 'light':
//         avatar = defaultAvatarLight;
//         break;
//       case 'dark':
//         avatar = defaultAvatarDark;
//         break;
//       default:
//         avatar = defaultAvatarViolet;
//         break;
//     }
//   }

  function handleFileChange(event) {
    const file = event;
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onload = function (e) {
      setCurrentImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
  return (
    <Box sx={container.helpFormContainer}>
      <Typography variant="h2" mb={3}>
        Edit profile
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        {({values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <lable style={{
                width: '68px',
                height: '79px',
                margin: '25px auto 0 auto',
                cursor: 'pointer'}}>
        <Box sx={container.ImgWrapperContainer}>
              {currentImage ? (
                 <Avatar
          sx={button.profileImgForm}
          src={currentImage}
          alt="User picture"
        ></Avatar>
                     
                    ) : (
                        <Box
          sx={button.profileImgForm}
          src={defaultAvatarViolet}
          alt="User avatar"
        ></Box>
            
                    )} 
                <IconButton sx={button.profileIconPlus}>
                         <Icon sx={icon.iconPlusUser} id={"plus"} />
                </IconButton>
              </Box>
              </lable>
           <input
                id="avatarUrl"
                type="file"
                name="avatarUrl"
                accept="image/*,.png,.jpg,.gif,.web"
                style={{display:'none'}}
                  onChange={event => {
                    handleFileChange(event.currentTarget.files[0]);
                  }}
                />

              <ErrorMessage
                name="name"
                component="div"
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginTop: -20,
                  marginBottom: 4,
                }}
              />
              <TextField
                name="name"
                variant="outlined"
                value={values.name}
                placeholder={user.name}
                fullWidth
                onChange={handleChange}
                 sx={form.input}
                inputProps={{
                  style: { color: '#FFF' },
                }}
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
                name="email"
                variant="outlined"
                value={values.email}
                placeholder={user.email}
                fullWidth
                onChange={handleChange}
                 sx={form.input}
                inputProps={{
                  style: { color: '#FFF' },
                }}
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
              <OutlinedInput
                name="password"
                type={password ? 'text' : 'password'}
                placeholder="Create a password"
                value={values.password}
                fullWidth
                sx={form.input}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={form.icon}
                    >
                      {password ? (
                        <RemoveRedEyeOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
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
  );
};

export default EditProfileTest;
