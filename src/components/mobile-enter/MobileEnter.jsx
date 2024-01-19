'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import st from './MobileEnter.module.scss';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import Button from '../button/Button';
import SocialMedias from '../social-medias/SocialMedias';

const MobileEnter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const bodyOverflowStyle = isMenuOpen ? 'hidden' : 'auto';
    document.body.style.overflow = bodyOverflowStyle;
    return () => {
      document.body.style.overflow = 'auto';
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
            <Image
              className={st.image}
              src='/logo.png'
              alt='Banner Image'
              width={300}
              height={300}
            />
          </div>
          <div className={st.continue}>
            {' '}
            {isMenuOpen && <Button onClick={toggleMenu} text={`Продовжити`} />}
            <HiOutlineChevronDoubleRight className={st.icon} />
          </div>
          <div className={st.continue} style={{ flexDirection: 'column' }}>
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
