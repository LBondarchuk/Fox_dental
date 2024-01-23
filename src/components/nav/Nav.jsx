import NavLink from '../nav-link/NavLink';
import st from './Nav.module.scss';

const Nav = () => {
  const navItems = [
    { link: '/', name: 'ГОЛОВНА' },
    { link: '/prices', name: 'ЦІНИ' },
    { link: '/servises', name: 'ПОСЛУГИ' },
    { link: '/contacts', name: 'КОНТАКТИ' },
  ];
  return (
    <div className={st.container}>
      {navItems.map((item) => (
        <NavLink key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Nav;
