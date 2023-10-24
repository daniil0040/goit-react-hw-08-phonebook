import { useEffect, useState } from "react";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid'
import { ContactListFilter } from "./ContactListFilter/ContactListFilter";
import { DefaultMsg } from "./DefaultMsg/DefaultMsg";
import { Layout } from "./Layout";

const getInitialContacts = () => {
    const savedContacts = localStorage.getItem("savedContacts")
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    }
    return []
  }

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
  localStorage.setItem("savedContacts",JSON.stringify(contacts))
},[contacts])

  const hendleDeleteItem = contactId => {
    const updatedContacts = contacts.filter(({ id }) => id !== contactId)
    setContacts(updatedContacts)
  }

  const hendleAddContact = newContact => {
    setContacts(prevState=> [...prevState,{...newContact,id: nanoid()}])
  }

  const hendleFilter = newFilter => {
  setFilter(`${newFilter.toLowerCase().trim()}`)
  }

  const visibleContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter)
    })

  return (
      <Layout>
        <h1>Phonebook</h1>
        <AddContactForm onAddContact={hendleAddContact} contacts={contacts}/>
        <h2>Contacts</h2>
        {contacts.length === 0 ? <DefaultMsg/> : <> <ContactListFilter onFilter={hendleFilter} filter={filter} /> <ContactList contacts={visibleContacts} onDelete={hendleDeleteItem} /> </>}
    </Layout>
  ); 
}
