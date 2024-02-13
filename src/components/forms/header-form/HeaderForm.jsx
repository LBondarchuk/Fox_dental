'use client';

import st from './HeaderForm.module.scss';
import Form from '../form/Form';
import { useState } from 'react';
import { sendToTelegram } from '@/utils/telegram';

const HeaderForm = ({ setShowModal = () => {} }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('+380');
  const [question, setQuestion] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\+380\d{9}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const onSend = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setNameError("Введіть ваше ім'я");
      return;
    }

    if (!validatePhoneNumber(number)) {
      setPhoneNumberError('Введіть коректний номер телефону');
      return;
    }
    sendToTelegram(`
      Замовлення з головної сторінки сайту\n
      Ім'я: ${name}\n
      Номер телефону: ${number}\n
      Додаткове повідомлення: ${question}
    `);

    setName('');
    setNumber('+380');
    setQuestion('');
    setNameError('');
    setPhoneNumberError('');
    setShowModal(false);
  };

  return (
    <div className={st.container}>
      <Form onSend={onSend}>
        <label>
          <span>Ім'я</span>
          <input
            type='text'
            placeholder="Введіть ваше ім'я"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError('');
            }}
          />
          {nameError && <p className={st.error}>{nameError}</p>}
        </label>
        <label>
          <span>Контактний номер</span>
          <input
            type='text'
            placeholder='(___) ___-__-__'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          {phoneNumberError && <p className={st.error}>{phoneNumberError}</p>}
        </label>
        <label>
          <span>Задайте запитання</span>
          <textarea
            placeholder='Почніть з головного'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>
        <hr />
      </Form>
    </div>
  );
};

export default HeaderForm;
