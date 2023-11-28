import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactListFilter } from 'components/ContactListFilter/ContactListFilter';
import { DefaultMsg } from 'components/DefaultMsg/DefaultMsg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectErr,
  selectLoading,
} from 'redux/contacts/contactsSlice';
import { getAllContacts } from 'redux/contacts/contactsOperations';

export default function PhoneBook() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectErr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div>
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
    </div>
  );
}
