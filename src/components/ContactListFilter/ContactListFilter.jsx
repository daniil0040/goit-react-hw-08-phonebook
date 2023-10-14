export const ContactListFilter = ({onFilter}) => {
    return <div>
        <input type="text" onChange={(e)=>{onFilter(e.target.value)}} placeholder="🔎"/>
    </div>
}