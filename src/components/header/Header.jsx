'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Nav from '../nav/Nav';
import TopActions from '../top-actions/TopActions';
import st from './Header.module.scss';
import classNames from 'classnames';
import MobileNav from '../mobile-nav/MobileNav';
import { usePathname } from 'next/navigation';
import Logo from '../logo/Logo';

const Header = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const containerControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScroll]);

  useEffect(() => {
    setShow(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    containerControls.start({});
  }, [hasScroll, containerControls]);

  return (
    <motion.div
      className={st.wrapper}
      animate={{
        height: hasScroll ? 100 : 60,
      }}
      transition={{ duration: 1 }}
    >
      <div
        className={classNames(st.bacground, {
          [st.scroll]: hasScroll,
        })}
      >
        <div className={classNames(st.container)}>
          <motion.div
            animate={{ scale: 1, rotate: 360 }}
            initial={{ scale: 0, rotate: 0 }}
            transition={{ type: 'spring', delay: 0.5, duration: 1 }}
          >
            <Logo
              style={{ backgroundColor: hasScroll ? 'transparent' : 'rgba(2, 44, 25, 0.95)' }}
            />
          </motion.div>
          <Nav />
          <MobileNav show={show} />
          <TopActions setShow={setShow} show={show} />
        </div>
      </div>

      <div className={st.line}></div>
    </motion.div>
  );
};

export default Header;
