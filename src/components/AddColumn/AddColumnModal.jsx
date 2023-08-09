import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addColumn } from 'store/boards/operations';

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
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Icon } from 'components/Icons';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});
const initialValues = {
  title: '',
};

const AddColumnModal = ({ onCloseModal }) => {
  const { boardId } = useParams();
  const dispatch = useDispatch();

  const parentBoard = boardId;

  const handleSubmit = (values, { resetForm }) => {
    console.log({...values, parentBoard})
    dispatch(addColumn({ ...values, parentBoard }));
    resetForm();
    onCloseModal();
  };
  return (
    <Section>
      <SectionTitle>Add column</SectionTitle>

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
                <Icon id={'plus'} />
              </PlusIcon>
            </ButtonPlus>
            Add
          </AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default AddColumnModal;
