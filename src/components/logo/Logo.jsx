import st from './Logo.module.scss';
import Image from 'next/image';

const Logo = ({ style }) => {
  return (
    <div className={st.wrapper} style={style}>
      <div className={st.container}>
        <Image src='/logo.png' alt='Banner Image' width={200} height={150} />
      </div>
      <div className={st.name}>OLEG LISKO</div>
      <div className={st.surName}>FOX DENTAL</div>
    </div>
  );
};

export default Logo;
