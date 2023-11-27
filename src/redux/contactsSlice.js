import { createSelector, createSlice } from '@reduxjs/toolkit';
import { getAllContacts, deleteContact, addContact } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    changeFilters: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getAllContacts.pending]: handlePending,
    [getAllContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [getAllContacts.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [deleteContact.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.items.push(action.payload);
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [addContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { changeFilters } = contactsSlice.actions;

//Selectors
export const selectContacts = state => state.contacts.contacts.items;

export const selectFilter = state => state.contacts.filter;

export const selectLoading = state => state.contacts.contacts.isLoading;

export const selectErr = state => state.contacts.contacts.error;

export const getVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  }
);
