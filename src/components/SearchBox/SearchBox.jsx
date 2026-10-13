import { useDispatch, useSelector } from "react-redux";

import { setFilter, setSortOrder } from "../../redux/contactsSlice";

import { getFilter, getSortOrder } from "../../redux/selectors";

import {
  SearchWrapper,
  SearchLabel,
  SearchInput,
  SortSelect,
} from "./SearchBox.styled";

export const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const sortOrder = useSelector(getSortOrder);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleSort = (event) => {
    dispatch(setSortOrder(event.target.value));
  };

  return (
    <SearchWrapper>
      <SearchLabel>Find contacts by name</SearchLabel>

      <SearchInput type="text" value={filter} onChange={handleChange} />

      <SearchLabel>Sort by name</SearchLabel>

      <SortSelect value={sortOrder} onChange={handleSort}>
        <option value="asc">A–Z</option>
        <option value="desc">Z–A</option>
      </SortSelect>
    </SearchWrapper>
  );
};
