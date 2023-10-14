import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { AddForm, ErrMsg, FormContainer, FormLable } from './AddContactForm.styled';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(2,"Too short!").required("This field is required!"),
    number: Yup.string()
  .required("This field is required!")
  .matches(phoneRegExp, 'Phone number is not valid')
  .min(10, "Too short!")
  .max(10, "Too long!"),
})
export const AddContactForm = ({onAddContact,contacts}) => {
    return <FormContainer>
    <Formik
    initialValues={{
        name: '',
        number: ''
            }}

            validationSchema={ContactSchema}

            onSubmit={(values, actions) => {
                if (contacts.map(({ name }) => name).includes(values.name)) {
            return Notiflix.Notify.failure(`${values.name} is already in contacts.`);
                } else if (contacts.map(({ number }) => number).includes(values.number)) {
                    return Notiflix.Notify.failure(`This number ${values.number} is already in contacts.`);
        }
        onAddContact(values)
        actions.resetForm()
    }}
    >
      <AddForm>
        <FormLable>
            <p>Name</p>
                    <Field name="name" />
                    <ErrMsg name="name" component="span"/>
        </FormLable>
        <FormLable>
            <p>Number</p>
                    <Field name="number" type="tel" />
                    <ErrMsg name="number" component="span"/>
        </FormLable>
        <button type="submit">Add contact</button>
      </AddForm>
    </Formik>
        </FormContainer>
    }