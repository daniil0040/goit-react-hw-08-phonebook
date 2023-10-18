import { Filter } from "./ContactListFilter.styled"

export const ContactListFilter = ({onFilter, filter}) => {
    return <div>
        <Filter value={filter} type="text" onChange={(e)=>{onFilter(e.target.value)}} placeholder="🔎"/>
    </div>
}