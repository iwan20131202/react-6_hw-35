import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts.items;

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
