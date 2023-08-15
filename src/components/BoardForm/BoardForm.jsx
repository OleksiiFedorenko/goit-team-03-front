import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material';
import { Icon } from 'components/Icons';
import { button, container, form, input, text } from 'styles';
import { previews } from 'helpers/getBgPreviews';
import SubmitButton from 'components/FormsUI/SubmitButton';
import { iconLabel } from 'styles/icon';

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
  onCloseModal,
  initData,
  title,
  type,
  boardOperation,
  id,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const submitvalues = !id ? values : { ...values, id };
    dispatch(boardOperation(submitvalues));

    setSubmitting(false);
    resetForm();
    onCloseModal();
  };

  return (
    <Container sx={container.cardForm}>
      <Formik
        initialValues={initData ? initData : initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validationOnBlur={true}
      >
        {({ handleChange, values }) => (
          <Form>
            <Typography variant="h2" mb={'24px'}>
              {title}
            </Typography>
            <FormLabel>
              <TextField
                type="text"
                name="title"
                placeholder="Title"
                value={values.title}
                onChange={handleChange}
                sx={input.boardForm}
              />
              <ErrorMessage
                name="title"
                component="div"
                style={form.errorMessage}
              />
            </FormLabel>
            <FormControl>
              <FormLabel sx={form.label}>
                <Typography variant="h3" sx={text.label}>
                  Icons
                </Typography>
                <Box role="group" sx={container.iconBox}>
                  {iconNames.map((icon, index) => (
                    <Box key={index} sx={container.boardIcon}>
                      <Field
                        type="radio"
                        id={index}
                        name="icon"
                        value={icon}
                        checked={values.icon === icon}
                      />
                      <FormLabel htmlFor={index} sx={iconLabel}>
                        <Icon id={icon} sx={button.boardEdit}></Icon>
                      </FormLabel>
                    </Box>
                  ))}
                </Box>
                <ErrorMessage name="icon" component="div" />
              </FormLabel>

              <FormLabel sx={form.label} style={{ marginBottom: '40px' }}>
                <Typography variant="h3" sx={text.label}>
                  Background
                </Typography>
                <Box sx={container.imageWrap}>
                  {previews.map((preview, index) => (
                    <Box key={index} sx={container.boardBg}>
                      <Field
                        type="radio"
                        id={`back${index}`}
                        name="background"
                        value={index}
                        checked={Number(values.background) === index}
                      />
                      <FormLabel
                        htmlFor={`back${index}`}
                        sx={form.bgLabel}
                        style={{ backgroundImage: `url(${preview})` }}
                      />
                    </Box>
                  ))}
                </Box>
                <ErrorMessage name="background" component="div" />
              </FormLabel>
            </FormControl>
            <SubmitButton>{type}</SubmitButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

BoardForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  initData: PropTypes.object,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  boardOperation: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default BoardForm;
