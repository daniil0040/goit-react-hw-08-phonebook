import { useDispatch, useSelector } from 'react-redux';
import { Contact } from './ContactListItem.styled';
import { deleteContact, getContacts, getFilter } from 'redux/contactsSlice';

export const ContactListItem = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  return visibleContacts.map(({ name, number, id }) => {
    return (
      <Contact key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </Contact>
    );
  });
};
