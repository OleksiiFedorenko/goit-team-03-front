import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { updateProfile } from 'store/auth/operations';
// import { Icon } from 'components/Icons';
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

// import {
//     EditWrapper, IconStyle, Title, FormWrapper, ErrorSection,
//     FormSubmit, FormField,  Img, FieldAvatar, FormSection, ImgWrapper, IconPlus, Label, FormIcon, Eye
// } from './EditProfile.styled';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters'),
  email: Yup.string().email('Invalid email'),
  password: Yup.string()
    .trim()
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
const EditProfileTest = ({ avatarURL, onCloseModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [password, setPassword] = useState('password');
  // const [currentImage, setCurrentImage] = useState(avatarURL);

  const handleClickShowPassword = () => setPassword(show => !show);

  const handleSubmit = (values, { resetForm }) => {
    const { avatar, name, email, password } = values;
    const formData = new FormData();
    if (avatar) {
      formData.append('avatar', avatar);
    }
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    dispatch(updateProfile(formData));
    resetForm();
    onCloseModal();
  };

  function handleFileChange(event) {
    const file = event;
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onload = function (e) {
      // setCurrentImage(e.target.result);
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
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              {/* <Label htmlFor="avatar">
                  <ImgWrapper>
                    {currentImage ? (
                      <Img src={currentImage} alt="User picture" />
                    ) : (
                        <IconStyle>
                         <Icon id={"user"} />
                       </IconStyle>
                    )}
                    <IconPlus aria-label="add">
                         <Icon id={"plus"} />
                    </IconPlus>
                  </ImgWrapper>
                </Label>
                <FieldAvatar
                  id="avatar"
                  type="file"
                  name="avatar"
                  onChange={event => {
                    setFieldValue('avatar', event.currentTarget.files[0]);
                    handleFileChange(event.currentTarget.files[0]);
                  }}
                />
                <ErrorSection name="name" component="div" /> */}

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
                // value={values.name}
                onChange={handleFileChange()}
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
                // value={values.email}
                onChange={handleFileChange()}
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
                // value={values.password}
                onChange={handleFileChange}
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
