import { ContactListItem } from "components/ContactListItem/ContactListItem"
import { ContactListContainer } from "./ContactList.styled"

export const ContactList = ({contacts,onDelete}) => {
    return <ContactListContainer>
        <ContactListItem contacts={contacts} onDelete={ onDelete} />
    </ContactListContainer>
}