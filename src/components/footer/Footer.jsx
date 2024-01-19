import Nav from '../nav/Nav';
import SocialMedias from '../social-medias/SocialMedias';
import st from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={st.container}>
      <div className={st.nav}>
        <Link href='tel:+380689262855' className={st.number}>
          +380689262855
        </Link>
        <Nav />
      </div>
      <SocialMedias />

      <div className={st.additional}>
        <div className={st.hours}>
          <span>пн-пт: 8.00 - 20.00</span>
          <span>сб: 9.00 - 20.00</span>
          <span> нд: вихідний</span>
        </div>
        <div className={st.adress}> Вінниця, вулиця Пирогова, 23-Б</div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
