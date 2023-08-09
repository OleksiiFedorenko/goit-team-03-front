import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { updateProfile } from 'store/auth/operations';
import { Icon } from 'components/Icons';
import defaultAvatar from '../../images/user-default-avatar.png';
import {
    EditWrapper, IconStyle, Title, FormUser, FormWrapper, ErrorSection,
    FormSubmit, FormField, UserAvatar, Img, FieldAvatar, FormSection, FormFields, ImgWrapper, IconPlus, Label
} from './EditProfile.styled';

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
const EditProfile = ({avatarURL, onCloseModal, isLoading}) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [type, setType] = useState('password');
    const [currentImage, setCurrentImage] = useState(avatarURL);
    const [isSubmit, setIsSubmit] = useState(false);

     useEffect(() => {
    if (isSubmit && !isLoading) {
      onCloseModal();
    }
   }, [onCloseModal, isLoading, isSubmit]);
    
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
        setIsSubmit(true);
         resetForm();
        onCloseModal();
  }
//     resetForm();
//     onCloseModal();
// }
function handleClick() {
    switch (type) {
      case 'text':
        return setType('password');
      case 'password':
        return setType('text');

      default:
        break;
    }
  }
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
        <EditWrapper>
        <FormUser>
        <Title>Edit profile</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={UserSchema}
                onSubmit={handleSubmit}
                >
                    {({ setFieldValue}) => (
            <FormSection>
              <FormFields>
                <Label htmlFor="avatar">
                  <ImgWrapper>
                    {currentImage ? (
                      <Img src={currentImage} alt="User picture" />
                    ) : (
                        <UserAvatar src={defaultAvatar} alt="Default Avatar" height="68px" width="68px" />
                    )}
                    <IconPlus aria-label="add">
                      <IconStyle>
                         <Icon id={"plus"} />
                       </IconStyle>
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
                <ErrorSection name="name" component="div" />
        
            <FormWrapper>
                <ErrorSection name="name" component="div" />
                <FormField type="text" id="name" name="name" placeholder={user.name} />
            </FormWrapper>
            <FormWrapper>
                <ErrorSection name="email" component="div" />
                <FormField type="email" id="email" name="email" placeholder={user.email} />
            </FormWrapper>
            <FormWrapper>
                <ErrorSection name="password" component="div" />
                <FormField type={type}
              id="password"
              name="password"
              placeholder="Enter your password"/>
        </FormWrapper>
            </FormFields>
             <FormSubmit type="submit">Send</FormSubmit>
                    </FormSection>
                    )}
          </Formik>
        </FormUser>
            </EditWrapper> 
      
   ) 
}

export default EditProfile;