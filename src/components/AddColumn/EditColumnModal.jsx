import { Formik } from 'formik';
import * as Yup from 'yup';
import { Icon } from 'components/Icons';

import {
  FormWrapper,
  Section,
  AuthFormSubmitButton,
  PlusIcon,
  TitleInput,
  SectionTitle,
  ModalForm,
  ErrorSection,
  ButtonPlus,
} from './AddColumnModal.styled';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

const EditColumnModal = ({ title, columnId, closeModal }) => {

  const initialValues = {
    title,
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    closeModal();
  };

  return (
    <Section>
      <SectionTitle>Edit column</SectionTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <ErrorSection name="title" component="div" />
            <TitleInput
              type="text "
              id="text"
              name="title"
              placeholder="Title "
            />
          </FormWrapper>

          <AuthFormSubmitButton type="submit">
            <ButtonPlus>
              <PlusIcon>
                 <Icon id={"plus"} />
              </PlusIcon>
            </ButtonPlus>
            Edit
          </AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default EditColumnModal;