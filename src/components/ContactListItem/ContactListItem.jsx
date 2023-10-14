import { Contact } from "./ContactListItem.styled"

export const ContactListItem = ({contacts,onDelete}) => {
    return contacts.map(({ name, number, id }) => {
        return <Contact key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={()=>onDelete(id)}>Delete</button>
        </Contact>
    })
}