'use client';

import { useState } from 'react';
import st from './Prices.module.scss';
import { Transition } from '../../components/Transition';
import Ansver from '../../components/pricesPageComponents/ansver/Ansver';

const items = [
  {
    name: 'Консультації',
    children: [
      {
        servise: 'Огляд та консультація до 20 хвилин',
        price: '750',
      },
      {
        servise: 'Огляд та консультація до 20 хвилин',
        price: '750',
      },
      {
        servise: 'Огляд та консультація до 20 хвилин',
        price: '750',
      },
    ],
  },
  {
    name: 'Консулdьтації',
    children: [
      {
        servise: 'Огляд та консультація до 20 хвилин',
        price: '750',
      },
      {
        servise: 'Огляд та консультація до 20 хвилин',
        price: '750',
      },
      {
        servise: 'Огляд та консультація до 20 хвилин',
        price: '750',
      },
    ],
  },
  {
    name: 'Консультацdії',
    children: [
      {
        servise: 'Огляд та консультація до 20 хвилин',
        price: '750',
      },
      {
        servise: 'Огляд та консультація до 20 хвилин',
        price: '750',
      },
      {
        servise: 'Огляд та консультація до 20 хвилин',
        price: '750',
      },
    ],
  },
];

const Prices = () => {
  const [active, setActive] = useState(null);
  const isActive = (name) => active === name;

  return (
    <div className={st.container}>
      <div className={st.fake}></div>
      <h1 className={st.title}>ЦІНИ</h1>
      <div className={st.list}>
        {items.map((item) => (
          <Transition>
            <hr />
            <div
              className={st.item}
              key={item.name}
              onClick={() => setActive(isActive(item.name) ? '' : item.name)}
            >
              <div className={st.itemTitle}>
                <div className={st.name}>{item.name}</div>
                <div className={st.action}>{isActive(item.name) ? '-' : '+'}</div>
              </div>
              <div
                style={{
                  maxHeight: isActive(item.name) ? '500px' : '0',
                  transition: 'max-height 0.5s ease',
                  overflow: 'hidden',
                }}
                className={st.children}
              >
                {item.children.map((child) => (
                  <div className={st.description} key={child.servise}>
                    <div className={st.servise}>{child.servise}</div>
                    <div className={st.price}>{child.price} грн</div>
                  </div>
                ))}
              </div>
            </div>{' '}
          </Transition>
        ))}
        <hr />
      </div>
      <Ansver />
    </div>
  );
};

export default Prices;
