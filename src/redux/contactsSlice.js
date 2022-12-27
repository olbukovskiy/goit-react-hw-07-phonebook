import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialValues = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contactsSlice',
  initialState: initialValues,
  reducers: {
    addNewContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },

      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            number,
            name,
          },
        };
      },
    },

    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contactsSlice',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
