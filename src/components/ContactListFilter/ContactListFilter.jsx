export const ContactListFilter = ({onFilter, filter}) => {
    return <div>
        <input value={filter} type="text" onChange={(e)=>{onFilter(e.target.value)}} placeholder="🔎"/>
    </div>
}