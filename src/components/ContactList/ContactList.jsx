import { useSelector } from "react-redux";

import { Contact } from "../Contact/Contact";

import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from "../../redux/selectors";

import { ListTitle, ContactsList } from "./ContactList.styled";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <ListTitle>Contacts</ListTitle>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ContactsList>
        {visibleContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ContactsList>
    </>
  );
};
