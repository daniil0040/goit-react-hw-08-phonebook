import { useDispatch, useSelector } from 'react-redux';
import { Contact } from './ContactListItem.styled';
import { getVisibleContacts } from 'redux/contacts/contactsSlice';
import { deleteContact } from 'redux/contacts/contactsOperations';

export const ContactListItem = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

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
