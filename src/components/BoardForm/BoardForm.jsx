import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Typography } from '@mui/material';
import {
  BgLabel,
  BoardBg,
  BoardIcon,
  Btn,
  Error,
  FormEl,
  IconEl,
  IconLabel,
  Icontainer,
  IconWrap,
  ImageWrap,
  Input,
  Label,
  Text,
} from './BoardForm.styled';
import sprite from 'components/Icons/sprite.svg';
import { previews } from 'helpers/getBgPreviews';
import { addBoard } from 'store/boards/operations';

const iconNames = [
  'project',
  'star',
  'loading',
  'puzzle-piece',
  'container',
  'lightning',
  'colors',
  'hexagon',
];

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Is Required')
    .min(3, 'The title must contain at least 3 characters'),

  icon: Yup.string().required('Is Required'),

  background: Yup.string(),
});

const initialValues = {
  title: '',
  icon: iconNames[0],
  background: '0',
};

const BoardForm = ({ onCloseModal, initData, title, type }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(addBoard(values));
    setSubmitting(false);
    resetForm();
    onCloseModal();
  };

  return (
    <Formik
      initialValues={initData ? initData : initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validationOnBlur={true}
    >
      {({ isSubmitting, dirty, values }) => (
        <FormEl>
          <Typography variant="h6" mb={2}>
            {title}
          </Typography>
          <Label>
            <Input type="text" name="title" placeholder="Title" autoFocus />
            <Error name="title" component="div" />
          </Label>

          <Label>
            <Text>Icons</Text>
            <Icontainer role="group">
              {iconNames.map((icon, index) => (
                <BoardIcon key={index}>
                  <Input
                    type="radio"
                    id={index}
                    name="icon"
                    value={icon}
                    checked={values.icon === icon}
                  />
                  <IconLabel htmlFor={index}>
                    <IconEl id={icon} />
                  </IconLabel>
                </BoardIcon>
              ))}
            </Icontainer>
            <Error name="icon" component="div" />
          </Label>

          <Label>
            <Text>Background</Text>
            <ImageWrap>
              {previews.map((preview, index) => (
                <BoardBg key={index}>
                  <Input
                    type="radio"
                    id={`back${index}`}
                    name="background"
                    value={index}
                    checked={Number(values.background) === index}
                  />
                  <BgLabel
                    htmlFor={`back${index}`}
                    style={{ backgroundImage: `url(${preview})` }}
                  />
                </BoardBg>
              ))}
            </ImageWrap>

            <Error name="background" component="div" />
          </Label>
          <Btn
            variant="contained"
            type="submit"
            disabled={isSubmitting || !dirty}
          >
            <IconWrap>
              <svg width="18px" height="18px" stroke="currentColor">
                <use href={sprite + '#icon-plus'} />
              </svg>
            </IconWrap>
            <span>{type}</span>
          </Btn>
        </FormEl>
      )}
    </Formik>
  );
};

BoardForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default BoardForm;
