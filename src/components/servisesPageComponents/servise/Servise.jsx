import st from './Servise.module.scss';
import Image from 'next/image';
import { Transition } from '../../Transition';
import LearnMoreIcon from '@/components/learn-more/LearnMore';

const Servise = ({ onShowModal, item }) => {
  console.log(item, 'ss');
  return (
    <div className={st.container} onClick={onShowModal}>
      <div className={st.image}>
        <Image src='/2.jpeg' alt='Banner Image' fill style={{ objectFit: 'cover' }} />
      </div>
      <Transition>
        <div className={st.learnMore}>{/* <LearnMoreIcon isGreen /> */}</div>
        <div className={st.text}>
          {' '}
          <h3>{item.name}</h3>
          <p>{item.shortDescription}</p>
        </div>
      </Transition>
    </div>
  );
};

export default Servise;
