'use client';

import st from './HeaderForm.module.scss';
import Form from '../form/Form';
import { useState } from 'react';
import { sendToTelegram } from '@/utils/telegram';

const HeaderForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [question, setQuestion] = useState('');

  const onSend = (e) => {
    e.preventDefault();
    sendToTelegram(`
    Замовлення з головної сторінки сайту\n
    Ім'я: ${name}\n
    Номер телефону: ${number}\n
    Додаткове повідомлення: ${question}
  `);

    setName('');
    setNumber('');
    setQuestion('');
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
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Контактний номер</span>
          <input type='number' placeholder='(___) ___-__-__' value={number} />
          onChange={(e) => setNumber(e.target.value)}
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
