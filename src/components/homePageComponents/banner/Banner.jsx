'use client';
import Image from 'next/image';
import st from './Banner.module.scss';
import { motion } from 'framer-motion';
const text = 'CУЧАСНА СТОМАТОЛОГІЯ У МІСТІ ВІННИЦЯ'.split(' ');

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
        src='/b.jpeg'
        alt='Banner Image'
        layout='fill'
        objectFit='cover'
      />
      <div className={st.overlay}></div>
    </div>
  );
};

export default Banner;
