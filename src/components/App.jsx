import { useEffect } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactListFilter } from './ContactListFilter/ContactListFilter';
import { DefaultMsg } from './DefaultMsg/DefaultMsg';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from 'redux/operations';
import { selectContacts, selectErr, selectLoading } from 'redux/contactsSlice';

// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('savedContacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }
//   return [];
// };

export const App = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectErr);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('savedContacts', JSON.stringify(contacts));
  // }, [contacts]);
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>

      {error ? (
        <div>Something went wrong...Try reload page!</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : contacts.length === 0 ? (
        <DefaultMsg />
      ) : (
        <>
          <ContactListFilter />
          <ContactList />
        </>
      )}
    </Layout>
  );
};
