import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Typography } from '@mui/material';
import { Icon } from 'components/Icons';
import { button, icon } from 'styles';
import {
  BgLabel,
  BoardBg,
  BoardIcon,
  Btn,
  Error,
  FormEl,
  IconLabel,
  Icontainer,
  IconWrap,
  ImageWrap,
  Input,
  Label,
  Text,
} from './BoardForm.styled';
import { previews } from 'helpers/getBgPreviews';

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

const BoardForm = ({
  onSubmitForm,
  onCloseModal,
  initData,
  title,
  type,
  boardOperation,
  id,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // onSubmitForm(values);
    const submitvalues = !id ? values : { ...values, id };
    dispatch(boardOperation(submitvalues));

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
          <Typography variant="h2" mb={2}>
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
                    <Icon id={icon} sx={button.boardEdit}></Icon>
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
              <Icon id={'plus'} sx={icon.plusAdd} />
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
