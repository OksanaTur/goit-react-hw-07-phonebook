import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'shared/loader';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { TextApp, WrapperApp } from './App.styled';

const App = () => {
  const isContacts = Boolean(useSelector(getFilteredContacts).length);
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <WrapperApp>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}

      {isContacts && <ContactsList />}

      {!isContacts && !isLoading && (
        <TextApp>No contacts in list</TextApp>
      )}
      <ToastContainer autoClose={1500} position="top-right" />
    </WrapperApp>
  )
};

export default App;
