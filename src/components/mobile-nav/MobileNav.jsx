import NavLink from '../nav-link/NavLink';
import SocialMedias from '../social-medias/SocialMedias';
import st from './MobileNav.module.scss';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const MobileNav = ({ show }) => {
  const navItems = [
    { link: '/', name: 'HOME' },
    { link: '/price', name: 'PRICES' },
    { link: '/', name: 'HOME' },
  ];
  return (
    <div
      className={st.container}
      style={{ transform: !show ? 'translateX(+100%)' : 'translateX(0)' }}
    >
      <div>
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
