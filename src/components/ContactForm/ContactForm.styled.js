import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  padding: 20px;
  background-color: #dee8f4ff;
  border-radius: 8px;
  font-family: "Quicksand", sans-serif;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: black;
`;

export const FormInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  outline: none;
  border: 1px solid ${({ $invalid }) => ($invalid ? "#d64545" : "transparent")};

  &:focus {
    box-shadow: 0 4px 8px rgba(133, 199, 254, 0.2);
  }
`;

export const ErrorText = styled.span`
  color: #d64545;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #aebd38;
  color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #6a9a40ff;
  }
`;
