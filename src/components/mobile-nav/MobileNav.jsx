'use client';
import { useEffect } from 'react';
import NavLink from '../nav-link/NavLink';
import SocialMedias from '../social-medias/SocialMedias';
import st from './MobileNav.module.scss';

const MobileNav = ({ show }) => {
  const navItems = [
    { link: '/', name: 'ГОЛОВНА' },
    { link: '/prices', name: 'ЦІНИ' },
    { link: '/servises', name: 'ПОСЛУГИ' },
  ];

  const toggleBodyScroll = () => {
    document.body.style.overflow = show ? 'hidden' : 'auto';
  };
  useEffect(() => {
    toggleBodyScroll();
    return () => {
      toggleBodyScroll();
    };
  }, [show]);

  return (
    <div
      className={st.container}
      style={{ transform: !show ? 'translateX(+100%)' : 'translateX(0)' }}
    >
      <div className={st.links}>
        {navItems.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </div>
      <div style={{ marginBottom: 100 }}>
        <SocialMedias />
      </div>
    </div>
  );
};

export default MobileNav;
