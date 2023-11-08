import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    changeFilters: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            ...value,
            id: nanoid(),
          },
        };
      },
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { changeFilters, deleteContact, addContact } =
  contactsSlice.actions;

//Selectors
export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.contacts.filter;
