import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import {
  AddForm,
  ErrMsg,
  FormContainer,
  FormLable,
} from './AddContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contactsSlice';
import { addContact } from 'redux/operations';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('This field is required!'),
  phone: Yup.string()
    .required('This field is required!')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'Too short!')
    .max(10, 'Too long!'),
});
export const AddContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          if (contacts.map(({ name }) => name).includes(values.name)) {
            return Notiflix.Notify.failure(
              `${values.name} is already in contacts.`
            );
          } else if (
            contacts.map(({ phone }) => phone).includes(values.phone)
          ) {
            return Notiflix.Notify.failure(
              `This number ${values.phone} is already in contacts.`
            );
          }
          dispatch(addContact(values));
          actions.resetForm();
        }}
      >
        <AddForm>
          <FormLable>
            <p>Name</p>
            <Field name="name" />
            <ErrMsg name="name" component="span" />
          </FormLable>
          <FormLable>
            <p>Number</p>
            <Field name="phone" type="tel" />
            <ErrMsg name="phone" component="span" />
          </FormLable>
          <button type="submit">Add contact</button>
        </AddForm>
      </Formik>
    </FormContainer>
  );
};
