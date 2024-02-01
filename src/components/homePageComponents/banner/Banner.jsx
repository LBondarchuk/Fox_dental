'use client';
import Image from 'next/image';
import st from './Banner.module.scss';
import { motion } from 'framer-motion';
const text = "Fox Dental: Ваш Шлях до Здоров'я та Яскравої Усмішки".toUpperCase().split(' ');

const Banner = () => {
  return (
    <div className={st.container}>
      <h1 className={st.text}>
        {' '}
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: i / 10,
            }}
            key={i}
          >
            <span key={i} className={i < 2 && st.brand}>
              {el}{' '}
            </span>
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default Banner;
