import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addContact } from "../../redux/operations";
import { getContacts } from "../../redux/selectors";

import {
  FormWrapper,
  FormLabel,
  FormInput,
  ErrorText,
  SubmitButton,
} from "./ContactForm.styled";


const PHONE_CHARS = /^\+?[\d\s()-]+$/;

const validate = (name, phone, contacts) => {
  const errors = {};
  const trimmedName = name.trim();
  const trimmedPhone = phone.trim();

  if (!trimmedName) {
    errors.name = "Name is required";
  } else if (
    contacts.some((c) => c.name.trim().toLowerCase() === trimmedName.toLowerCase())
  ) {
    errors.name = `${trimmedName} is already in contacts`;
  }

  if (!trimmedPhone) {
    errors.phone = "Phone is required";
  } else {
    const digits = trimmedPhone.replace(/\D/g, "");
    if (!PHONE_CHARS.test(trimmedPhone) || digits.length < 7 || digits.length > 15) {
      errors.phone = "Enter a valid phone, e.g. +380 50 123 45 67";
    }
  }

  return errors;
};

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validate(name, phone, contacts);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    dispatch(
      addContact({
        name: name.trim(),
        phone: phone.trim(),
      }),
    );

    setName("");
    setPhone("");
  };

  const handleName = (event) => {
    setName(event.target.value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  return (
    <FormWrapper onSubmit={handleSubmit} noValidate>
      <FormLabel>
        Name
        <FormInput
          type="text"
          value={name}
          onChange={handleName}
          $invalid={Boolean(errors.name)}
        />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </FormLabel>

      <FormLabel>
        Phone
        <FormInput
          type="tel"
          value={phone}
          onChange={handlePhone}
          $invalid={Boolean(errors.phone)}
        />
        {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
      </FormLabel>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormWrapper>
  );
};
