import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";

import { fetchContacts } from "./redux/operations";

import { AppContainer, AppTitle } from "./App.styled";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <AppTitle>Phonebook</AppTitle>

      <ContactForm />

      <SearchBox />

      <ContactList />
    </AppContainer>
  );
}

export default App;
