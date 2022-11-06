import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useState } from 'react';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors';
import s from './PhoneList.module.css';
import { UpdateForm } from 'components/UpdateContact/UpdateContact';
import Button from '@mui/material/Button';
import { RotatingLines } from 'react-loader-spinner';
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
      {isLoading && (
        <div className={s.loader}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="3"
            animationDuration="1"
            width="70"
            visible={true}
          />
        </div>
      )}
      {error && <p>Sorry!The action was not completed, try again later.</p>}
      <ul className={s.phoneList}>
        {!renderContacts.length && <p>There are no contacts found!</p>}
        {renderContacts.length > 0 &&
          renderContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={s.phoneItem}>
                <div className={s.itemWrap}>
                  <div className={s.container}>
                    <span className={s.phoneName}> {name} :</span>
                    <span className={s.phoneNumber}>{number}</span>
                  </div>

                  <div className={s.phoneButtons}>
                    <Button
                      className={s.button}
                      variant="outlined"
                      startIcon={
                        <PersonRemoveIcon className={s.PersonRemoveIcon} />
                      }
                      onClick={() => dispatch(deleteContact(id))}
                    ></Button>

                    <Button
                      className={s.button}
                      variant="outlined"
                      startIcon={
                        <AutoFixHighIcon className={s.PersonRemoveIcon} />
                      }
                      onClick={() => showUpdateForm(id)}
                    ></Button>
                  </div>
                </div>
                {contactToUpdate?.id === id && (
                  <UpdateForm contact={contactToUpdate} closeForm={closeForm} />
                )}
              </li>
            );
          })}
      </ul>
    </>
  );
};
