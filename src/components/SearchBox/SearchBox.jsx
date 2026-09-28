import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../redux/contactsSlice";

import { getFilter } from "../../redux/selectors";

import { SearchWrapper, SearchLabel, SearchInput } from "./SearchBox.styled";

export const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <SearchWrapper>
      <SearchLabel>Find contacts by name</SearchLabel>

      <SearchInput type="text" value={filter} onChange={handleChange} />
    </SearchWrapper>
  );
};