import styled from "styled-components";

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 380px;
  margin-bottom: 10px;
  padding: 12px 15px;
  background-color: #dee8f4ff;
  border-radius: 6px;
  color: black;
  font-family: "Quicksand", sans-serif;
`;

export const DeleteButton = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  background-color: #aebd38;
  color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #598234;
  }
`;
