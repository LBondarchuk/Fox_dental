import Image from 'next/image';
import st from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={st.container}>
      <h1 className={st.text}>CУЧАСНА СТОМАТОЛОГІЯ У МІСТІ ВІННИЦЯ</h1>
      <Image
        className={st.image}
        src='/b.jpeg'
        alt='Banner Image'
        layout='fill'
        objectFit='cover'
      />
      <div className={st.overlay}></div>
    </div>
  );
};

export default Banner;
