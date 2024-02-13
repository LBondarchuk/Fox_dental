import st from './Servise.module.scss';
import Image from 'next/image';

const Servise = ({ onShowModal, item }) => {
  return (
    <div className={st.container} onClick={onShowModal}>
      <h3 className={st.title}>
        <span>{item.name}</span>
      </h3>
      <div className={st.contentContainer}>
        <div className={st.image}>
          <Image src={item.img} alt='Banner Image' fill style={{ objectFit: 'cover' }} />
        </div>

        <div className={st.text}>{item.shortDescription}</div>
      </div>
    </div>
  );
};

export default Servise;
