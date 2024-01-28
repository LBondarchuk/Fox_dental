import Nav from '../nav/Nav';
import SocialMedias from '../social-medias/SocialMedias';
import st from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={st.container}>
      <div className={st.nav}>
        <Link href='tel:+380973554125' className={st.number}>
          +38 (097) 355 41 25
        </Link>
        <Nav />
      </div>
      <SocialMedias />

      <div className={st.additional}>
        <div className={st.hours}>
          <span>пн-пт: 8.00 - 20.00</span>
          <span>сб:10.00 - 16.00</span>
          <span> нд: 10.00 - 14.00</span>
        </div>
        <div className={st.adress}> Вінниця, вулиця Пирогова, 23-Б</div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
