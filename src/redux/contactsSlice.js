import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";

// Адаптер зберігає контакти в нормалізованому вигляді:
// { ids: [id1, id2, ...], entities: { id1: {...}, id2: {...} } }
// Сортування не задаємо тут (sortComparer), бо напрямок A–Z / Z–A
// змінюється користувачем — його обробляє селектор getVisibleContacts.
export const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState({
  isLoading: false,
  error: null,
  filter: "",
  sortOrder: "asc",
});

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        contactsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        contactsAdapter.addOne(state, action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        // action.meta.arg — це id, який передали в thunk
        contactsAdapter.removeOne(state, action.meta.arg);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter, setSortOrder } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
