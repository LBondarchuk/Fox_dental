'use client';
import { motion } from 'framer-motion';
import NavLink from '../nav-link/NavLink';
import SocialMedias from '../social-medias/SocialMedias';
import st from './MobileNav.module.scss';
import { memo } from 'react';

const MobileNav = memo(({ show }) => {
  const navItems = [
    { link: '/', name: 'ГОЛОВНА' },
    { link: '/prices', name: 'ЦІНИ' },
    { link: '/servises', name: 'ПОСЛУГИ' },
    { link: '/contacts', name: 'КОНТАКТИ' },
  ];

  return (
    <>
      <motion.div
        className={st.overlay}
        animate={show ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <motion.div
        className={st.container}
        animate={
          show
            ? { width: '100vw', height: '100vh', scale: 1, borderRadius: 0 }
            : { width: 0, overflow: 'hidden', scale: 0, height: 0, borderRadius: '100%' }
        }
        transition={{ type: 'spring', duration: 2, stiffness: 260, damping: 20 }}
      >
        <motion.div
          className={st.links}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          initial='hidden'
          animate='visible'
        >
          {navItems.map((item) => (
            <NavLink item={item} />
          ))}
        </motion.div>
        <div style={{ marginBottom: 100 }}>
          <SocialMedias />
        </div>
      </motion.div>
    </>
  );
});

export default MobileNav;
