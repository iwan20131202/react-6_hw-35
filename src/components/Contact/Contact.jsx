import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/operations";

import { ContactItem, DeleteButton } from "./Contact.styled";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ContactItem>
      <span>
        {contact.name}: {contact.phone}
      </span>

      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};