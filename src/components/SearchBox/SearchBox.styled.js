import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 340px;
  margin: 20px 0;
`;

export const SearchLabel = styled.label`
  color: #505160;
  font-family: "Quicksand", sans-serif;
  font-size: 17px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: solid 1px #505160;
  border-radius: 4px;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  outline: none;

  &:focus {
    box-shadow: 0 4px 8px rgba(1, 97, 176, 0.2);
  }
`;
