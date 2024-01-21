import Image from 'next/image';
import st from './Ansver.module.scss';

const Ansver = () => {
  return (
    <div className={st.container}>
      <div className={st.image}>
        <Image
          className={st.image}
          src='/b.jpeg'
          alt='Banner Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={st.text}>
        <h2>Від чого залежать ціни в стоматології?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vitae id ad adipisci
          aperiam sunt dolore a quasi? A eius fugiat enim illum optio laudantium vero eaque numquam
        </p>
        <p>
          in voluptas.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vitae id ad
          adipisci aperiam sunt dolore a quasi? A eius fugiat enim illum optio laudantium vero eaque
          numquam in voluptas.  
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vitae id ad adipisci
          aperiam sunt dolore a quasi? A eius fugiat enim illum optio laudantium vero eaque numquam
          in voluptas.  
        </p>
      </div>
    </div>
  );
};

export default Ansver;
