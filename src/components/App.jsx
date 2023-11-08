// import { useEffect, useState } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactListFilter } from './ContactListFilter/ContactListFilter';
import { DefaultMsg } from './DefaultMsg/DefaultMsg';
import { Layout } from './Layout';
import { useSelector } from 'react-redux';

// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('savedContacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }
//   return [];
// };

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  // useEffect(() => {
  //   localStorage.setItem('savedContacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
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
