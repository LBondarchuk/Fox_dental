'use client';

import { useEffect, useState } from 'react';
import Nav from '../nav/Nav';
import TopActions from '../top-actions/TopActions';
import st from './Header.module.scss';
import classNames from 'classnames';
import MobileNav from '../mobile-nav/MobileNav';
import Image from 'next/image';

const Header = () => {
  const [show, setShow] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScroll]);

  return (
    <div className={st.wrapper}>
      <div
        className={classNames(st.container, {
          [st.scroll]: hasScroll,
        })}
      >
        <span className={st.logo}>
          {' '}
          <Image className={st.image} src='/logo.png' alt='Banner Image' width={150} height={150} />
        </span>
        <Nav />
        <MobileNav show={show} />
        <TopActions setShow={setShow} show={show} />
      </div>
      <div className={st.line}></div>
    </div>
  );
};

export default Header;
