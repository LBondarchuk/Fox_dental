'use client';
import { useState, useEffect } from 'react';
import st from './Prices.module.scss';

import Ansver from '@/components/pricesPageComponents/ansver/Ansver';
import { Transition } from '@/components/Transition';
import { motion } from 'framer-motion';
import { fetchData } from '@/utils/api';

const Prices = () => {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(null);
  const isActive = (name) => active === name;

  useEffect(() => {
    fetchData('prices', setItems);
  }, []);
  console.log(items[0] ? items[0].servises : 'g');
  return (
    <div className={st.container}>
      <div className={st.fake}></div>
      <h1 className={st.title}>ЦІНИ</h1>
      <div className={st.list}>
        {items.map((item) => (
          <Transition key={item.id}>
            <hr />
            <div
              className={st.item}
              onClick={() => setActive(isActive(item.name) ? '' : item.name)}
            >
              <div className={st.itemTitle}>
                <div className={st.name}>{item.name}</div>
                <motion.span
                  animate={{
                    rotate: isActive(item.name) ? 0 : 90,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {' '}
                  <div className={st.action}>{isActive(item.name) ? '-' : '+'}</div>
                </motion.span>
              </div>
              <div
                style={{
                  maxHeight: isActive(item.name) ? '500px' : '0',
                  transition: 'max-height 0.5s ease',
                  overflow: 'hidden',
                }}
                className={st.children}
              >
                {item.servises.map((child) => (
                  <div className={st.description} key={child.name}>
                    <div className={st.servise}>{child.name}</div>
                    <div className={st.price}>{child.price} грн</div>
                  </div>
                ))}
              </div>
            </div>
          </Transition>
        ))}
        <hr />
      </div>
      <Ansver />
    </div>
  );
};

export default Prices;
