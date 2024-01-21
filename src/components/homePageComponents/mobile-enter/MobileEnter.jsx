'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import st from './MobileEnter.module.scss';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import Button from '../../button/Button';
import SocialMedias from '../../social-medias/SocialMedias';
import Logo from '../../logo/Logo';

const MobileEnter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    localStorage.setItem('menuOpened', 'true');
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const bodyOverflowStyle = isMenuOpen && screenWidth <= 460 ? 'hidden' : 'auto';
      document.body.style.overflow = bodyOverflowStyle;
    };

    const menuOpened = localStorage.getItem('menuOpened');
    if (menuOpened === 'true') {
      setIsMenuOpen(false);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`${st.container}`}
      style={{
        transform: `translateX(${isMenuOpen ? 0 : 100}%)`,
      }}
    >
      <div className={st.wrapper}>
        <div className={st.blocks}>
          <div className={st.logo}>
            <Logo style={{ backgroundColor: 'transparent' }} />
          </div>

          <div className={st.continue}>
            {' '}
            {isMenuOpen && <Button onClick={toggleMenu} text={`Продовжити`} />}
            <HiOutlineChevronDoubleRight className={st.icon} />
          </div>
          <div className={st.continue} style={{ flexDirection: 'column', marginTop: 80 }}>
            <p>
              Продовжити в<br /> соціальних мережах
            </p>
            <HiOutlineChevronDoubleRight
              className={st.icon}
              style={{ transform: 'rotate(90deg)' }}
            />
          </div>
          <div className={st.social}>
            <SocialMedias />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEnter;
