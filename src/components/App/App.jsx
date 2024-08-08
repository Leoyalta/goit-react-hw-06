import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearcBox from "../SearchBox/SearchBox";

export default function App() {
  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearcBox />
      <ContactList />
    </div>
  );
}
