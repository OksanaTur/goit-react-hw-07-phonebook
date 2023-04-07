import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';
import { BtnList, Contact, Item, List, Number } from './ContactList.styled';

const ContactsList = () => {
    const filteredContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    const handleDeleteContact = id => {
        dispatch(fetchDeleteContact(id));
        toast.error('Contact deleted')
    };

    const elements = filteredContacts.map(({ id, name, number }) => (
      <Item key={id}>
      <Contact>
        {name}: <Number>{number}</Number>{' '}
      </Contact>
      <BtnList
        type="button"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </BtnList>
    </Item>
    ));
    return <List>{elements}</List>;
};

export default ContactsList;

