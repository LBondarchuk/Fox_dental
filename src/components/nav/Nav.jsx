import NavLink from '../nav-link/NavLink';
import st from './Nav.module.scss';

const Nav = () => {
  const navItems = [
    { link: '/', name: 'HOME' },
    { link: '/prices', name: 'PRICES' },
    { link: '/', name: 'HOME' },
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
