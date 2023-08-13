import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { updateProfile } from 'store/auth/operations';
import { Icon } from 'components/Icons';

import {
  EditWrapper,
  IconStyle,
  Title,
  FormWrapper,
  ErrorSection,
  FormSubmit,
  FormField,
  Img,
  FieldAvatar,
  FormSection,
  ImgWrapper,
  IconPlus,
  Label,
  FormIcon,
  Eye,
} from './EditProfile.styled';
import { icon } from 'styles';

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
const EditProfile = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
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
    <EditWrapper>
      <Title>Edit profile</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormSection>
            <Label htmlFor="avatarURL">
              <ImgWrapper>
                {currentImage ? (
                  <Img src={currentImage} alt="User picture" />
                ) : (
                  <IconStyle>
                    <Icon id={'user'} />
                  </IconStyle>
                )}
                <IconPlus aria-label="add">
                  <Icon id={'plus'} sx={icon.addProfileImg} />
                </IconPlus>
              </ImgWrapper>
            </Label>
            <FieldAvatar
              id="avatarURL"
              type="file"
              name="avatarURL"
              accept="image/*,.png,.jpg,.gif,.web"
              onChange={event => {
                handleFileChange(event.currentTarget.files[0]);
              }}
            />
            <FormWrapper>
              <ErrorSection name="name" component="div" />
              <FormField
                type="text"
                id="name"
                name="name"
                placeholder={user.name}
              />
            </FormWrapper>
            <FormWrapper>
              <ErrorSection name="email" component="div" />
              <FormField
                type="email"
                id="email"
                name="email"
                placeholder={user.email}
              />
            </FormWrapper>

            <FormWrapper>
              <FormIcon>
                <ErrorSection name="password" component="div" />
                <FormField
                  type={password}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <Eye type="button" onClick={handleClickShowPassword}>
                  {password ? (
                    <IconPlus>
                      <Icon id={'eye'} sx={icon.eye} />
                    </IconPlus>
                  ) : (
                    <IconPlus>
                      <Icon id={'eye-off'} sx={icon.eye} />
                    </IconPlus>
                  )}
                </Eye>
              </FormIcon>
            </FormWrapper>

            <FormSubmit type="submit">Send</FormSubmit>
          </FormSection>
        </Form>
      </Formik>
    </EditWrapper>
  );
};

export default EditProfile;
