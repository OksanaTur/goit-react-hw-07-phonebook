import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts, fetchAddContact} from 'redux/contacts/contacts-operations';
import initialState from './initialState';
import { Btn, Text, Title, Wrapper } from './ContactForm.styled';

const ContactForm = () => {
    const [state, setState] = useState({ ...initialState });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);

    const handleSearch = e => {
        const { name, value } = e.target;
        setState(prevState => {
            return { ...prevState, [name]: value };
        })
    };

    const handleAddContact = e => {
        e.preventDefault();
        dispatch(fetchAddContact({ name, phone }));

        setState({ ...initialState })
    };

    const { name, phone } = state;

    return (
        <Wrapper onSubmit={handleAddContact}>
            <Title>
                Name
                <Text
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleSearch}
                />
            </Title>

            <Title>
                Number
                <Text
                    type="tel"
                    name="phone"
                    value={phone}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleSearch}
                />
            </Title>

            <Btn type="submit">
                Add contact
            </Btn>
        </Wrapper>
    );
};

export default ContactForm;
