'use client';

import Image from 'next/image';
import { useState } from 'react';
import st from './MobileEnter.module.scss';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import Button from '../button/Button';
import SocialMedias from '../social-medias/SocialMedias';

const MobileEnter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className={`${st.container} ${isMenuOpen ? st.open : ''}`}>
      <div className={st.wrapper}>
        <div className={st.blocks}>
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
