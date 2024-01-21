import st from './Servise.module.scss';
import Image from 'next/image';

const Servise = ({ onShpwModal }) => {
  return (
    <div className={st.container} onClick={onShpwModal}>
      <div className={st.image}>
        <Image src='/2.jpeg' alt='Banner Image' layout='fill' objectFit='cover' />
      </div>
      <div className={st.text}>
        {' '}
        <h3>Консультація та Діагностика</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo tenetur quae ratione alias
          eaque placeat ut, fugiat, eligendi veniam explicabo sint aperiam laborum. Facere, impedit
          aspernatur. Quae mollitia nesciunt laborum.
        </p>
      </div>
    </div>
  );
};

export default Servise;
