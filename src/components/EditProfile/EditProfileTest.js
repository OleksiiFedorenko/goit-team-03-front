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
  InputAdornment,
  IconButton,
  FormControl,
  Box,
} from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { container, form } from 'styles';


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
  const { user, avatarURL, theme } = useSelector(selectUser);
  const [password, setPassword] = useState('password');
  // const [currentImage, setCurrentImage] = useState(avatarURL);

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
//  let avatar = avatarURL;
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

  // function handleFileChange(event) {
  //   const file = event;
  //   if (!file) {
  //     return;
  //   }
  //   const reader = new FileReader();

  //   reader.onload = function (e) {
  //     setCurrentImage(e.target.result);
  //   };
  //   reader.readAsDataURL(file);
  // }
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
        {({ isSubmitting }) => (
          <form>
            <FormControl fullWidth>
                    {/* {currentImage ? (
                      <Img src={currentImage} alt="User picture" />
                    ) : (
                        <Box
          component="img"
          sx={button.profileImg}
          src={avatar}
          alt="User avatar"
        />
                    )}
                    <IconPlus aria-label="add">
                         <Icon id={"plus"} />
                    </IconPlus>
                <FieldAvatar
                  id="avatar"
                  type="file"
                  name="avatar"
                  onChange={event => {
                    handleFileChange(event.currentTarget.files[0]);
                  }}
                /> */}

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
                placeholder={user.name}
                fullWidth
                color="input"
                inputProps={{
                  style: { color: '#FFF' },
                }}
                sx={form.input}
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
                placeholder={user.email}
                fullWidth
                color="input"
                inputProps={{
                  style: { color: '#FFF' },
                }}
                sx={form.input}
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
                fullWidth
                color="input"
                sx={form.input}
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
