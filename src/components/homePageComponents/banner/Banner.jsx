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
            <span key={i}>{el} </span>
          </motion.span>
        ))}
      </h1>
      <Image
        className={st.image}
        src='/banner.jpg'
        alt='Banner Image'
        fill
        style={{ objectFit: 'cover' }}
        quality={80}
      />
      <div className={st.overlay}></div>
    </div>
  );
};

export default Banner;
