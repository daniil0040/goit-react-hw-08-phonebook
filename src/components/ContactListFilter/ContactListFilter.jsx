import { useDispatch, useSelector } from 'react-redux';
import { Filter } from './ContactListFilter.styled';
import { changeFilters, getFilter } from 'redux/contactsSlice';

export const ContactListFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <Filter
        value={filter}
        type="text"
        onChange={e => {
          dispatch(changeFilters(e.target.value.toLowerCase().trim()));
        }}
        placeholder="🔎"
      />
    </div>
  );
};
