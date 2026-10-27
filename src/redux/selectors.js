import { createSelector } from "@reduxjs/toolkit";

import { contactsAdapter } from "./contactsSlice";

// Готові селектори від адаптера для нормалізованого стану
export const {
  selectAll: getContacts, // масив усіх контактів (мемоїзований)
  selectById: getContactById, // (state, id) => контакт
  selectTotal: getContactsCount, // кількість контактів
} = contactsAdapter.getSelectors((state) => state.contacts);

export const getFilter = (state) => state.contacts.filter;

export const getSortOrder = (state) => state.contacts.sortOrder;

export const getIsLoading = (state) => state.contacts.isLoading;

export const getError = (state) => state.contacts.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter, getSortOrder],
  (contacts, filter, sortOrder) => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    const direction = sortOrder === "desc" ? -1 : 1;

    return [...filtered].sort(
      (a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" }) *
        direction,
    );
  },
);
