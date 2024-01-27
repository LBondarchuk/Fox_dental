'use client';
import { useState, useEffect } from 'react';
import st from './Prices.module.scss';

import Ansver from '@/components/pricesPageComponents/ansver/Ansver';
import { Transition } from '@/components/Transition';
import { motion } from 'framer-motion';
import { fetchData } from '@/utils/api';
import Loader from '@/components/loader/Loader';

const Prices = () => {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(null);
  const isActive = (name) => active === name;

  useEffect(() => {
    fetchData('prices', setItems);
  }, []);
  console.log(items, 'it');
  return (
    <div className={st.container}>
      {items.length > 0 ? (
        <>
          {' '}
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

                  <motion.div
                    animate={{ height: isActive(item.name) ? 'fit-content' : 0 }}
                    transition={{ duration: 0.5 }}
                    initial={{ height: 0 }}
                    className={st.children}
                  >
                    {item.servises.map((child) => (
                      <div className={st.description} key={child.name}>
                        <div className={st.servise}>{child.name}</div>
                        <div className={st.price}>{child.price} грн</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </Transition>
            ))}
            <hr />
          </div>
          <Ansver />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Prices;
