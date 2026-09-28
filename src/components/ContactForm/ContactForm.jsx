import { useState } from "react";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/operations";

import { FormWrapper, FormLabel, FormInput, SubmitButton } from "./ContactForm.styled";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addContact({
        name,
        phone,
      }),
    );

    setName("");
    setPhone("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormLabel>

      <FormLabel>
        Phone
        <FormInput
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormLabel>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormWrapper>
  );
};