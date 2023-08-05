import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  BgLabel,
  BoardBg,
  BoardIcon,
  Btn,
  Error,
  FormEl,
  Icon,
  IconLabel,
  Icontainer,
  IconWrap,
  ImageWrap,
  Input,
  Label,
  Text,
} from './BoardForm.styled';

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

const BoardForm = ({ onSubmitForm, onCloseModal, type = 'Create' }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // onSubmitForm(values);
    // dispatch(addBoard(values));
    setSubmitting(false);
    resetForm();
    onCloseModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validationOnBlur={true}
    >
      {({ isSubmitting, dirty, values }) => (
        <FormEl>
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
                    <Icon>
                      <svg width={'18px'} height={'18px'} stroke="currentColor">
                        {/* <use href={sprite + `#${icon}`} /> */}
                      </svg>
                    </Icon>
                  </IconLabel>
                </BoardIcon>
              ))}
            </Icontainer>
            <Error name="icon" component="div" />
          </Label>

          <Label>
            <Text>Background</Text>
            <ImageWrap>
              {/* {previews.map((preview, index) => (
              <BoardBg key={index}>
                <Input
                  type="radio"
                  id={`back${index}`}
                  name="background"
                  value={index}
                  // checked={Number(values.background) === index}
                />
                <BgLabel
                  htmlFor={`back${index}`}
                  style={{ backgroundImage: `url(${preview})` }}
                />
              </BoardBg>
            ))} */}
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
                {/* <use href={sprite + '#icon-name?'} /> */}
              </svg>
            </IconWrap>
            <span>{type}</span>
          </Btn>
        </FormEl>
      )}
    </Formik>
  );
};

export default BoardForm;
