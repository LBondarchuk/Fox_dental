'use client';

import { useEffect, useState } from 'react';
import Nav from '../nav/Nav';
import TopActions from '../top-actions/TopActions';
import st from './Header.module.scss';
import classNames from 'classnames';
import MobileNav from '../mobile-nav/MobileNav';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '../logo/Logo';

const Header = () => {
  const pathname = usePathname();
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

  useEffect(() => {
    setShow(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={st.wrapper}>
      <div
        className={classNames(st.container, {
          [st.scroll]: hasScroll,
        })}
      >
        <Logo style={{ backgroundColor: hasScroll ? 'transparent' : 'rgba(2, 44, 25, 0.95)' }} />
        <Nav />
        <MobileNav show={show} />
        <TopActions setShow={setShow} show={show} />
      </div>
      <div className={st.line}></div>
    </div>
  );
};

export default Header;
