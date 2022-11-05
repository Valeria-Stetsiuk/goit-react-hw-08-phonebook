import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { Form } from '../../components/ContactForm/ContactForm';
import { Section } from '../../components/Section/Section';
import { PhoneList } from '../../components/PhoneList/PhoneList';
import { Filter } from '../../components/ContactFilter/ContactFilter';
import s from '../../components/App.module.css';

export const ContactPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <div className={s.Contacts}>
          <Filter />
          <PhoneList />
        </div>
      </Section>
    </>
  );
};
