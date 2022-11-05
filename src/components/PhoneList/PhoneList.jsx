import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  updateContact,
} from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors';
import { useState } from 'react';
import s from './PhoneList.module.css';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
export const PhoneList = () => {
  const [contactToUpdate, setContactToUpdate] = useState({});
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const renderContacts = useSelector(selectContacts);

  const showUpdateForm = contactId => {
    const contact = renderContacts.find(({ id }) => id === contactId);
    setContactToUpdate(contact);
  };

  const closeForm = () => {
    setContactToUpdate(null);
  };
  return (
    <>
      {error && <p>Sorry!The action was not completed, try again later.</p>}
      <ul className={s.phoneList}>
        {!renderContacts.length && <p>There are no contacts found!</p>}
        {renderContacts.length > 0 &&
          renderContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={s.phoneItem}>
                <span className={s.phoneName}>{name} :</span>
                {number}

                <button
                  className={s.buttonDelete}
                  type="button"
                  disabled={isLoading}
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <PersonRemoveIcon />
                </button>
                <button
                  className={s.buttonDelete}
                  type="button"
                  disabled={isLoading}
                  onClick={() => showUpdateForm(id)}
                >
                  <AutoFixHighIcon />
                </button>
                {contactToUpdate?.id === id && (
                  <updateContact
                    contact={contactToUpdate}
                    closeForm={closeForm}
                  />
                )}
              </li>
            );
          })}
      </ul>
    </>
  );
};
