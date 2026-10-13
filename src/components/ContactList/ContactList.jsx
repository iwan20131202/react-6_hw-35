import { useSelector } from "react-redux";

import { Contact } from "../Contact/Contact";

import {
  getVisibleContacts,
  getIsLoading,
  getError,
} from "../../redux/selectors";

import { Title, List } from "./ContactList.styled";

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <>
      <Title>Contacts</Title>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      <List>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </List>
    </>
  );
};