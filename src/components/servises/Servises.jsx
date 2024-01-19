import Image from 'next/image';
import st from './Servises.module.scss';
import { Transition } from '../Transition';

const Servises = () => {
  return (
    <Transition>
      <div className={st.container}>
        <Transition>
          <h1 className={st.title}>НАШІ ПОСЛУГИ</h1>
        </Transition>
        <div className={st.items}>
          <Transition>
            <div className={st.item}>
              <div className={st.number}>1/</div>
              <div className={st.description}>
                <h2>ВИДАЛЕННЯ ЗУБІВ</h2>
                <p>
                  {' '}
                  Після ретельного огляду фідності можлива консультація інших лікарів, щоб виробити
                  індивідуальний план, який буде містити всю інформацію про майбутнє л
                </p>
              </div>
              <div className={st.img}>
                <Image
                  className={st.image}
                  src='/s1.jpeg'
                  alt='Banner Image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </Transition>
          <hr />
          <Transition>
            <div className={st.item}>
              <div className={st.number}>1/</div>
              <div className={st.description}>
                <h2>ВИДАЛЕННЯ ЗУБІВ</h2>
                <p>
                  {' '}
                  Після ретельного огляду фідності можлива консультація інших лікарів, щоб виробити
                  індивідуальний план, який буде містити всю інформацію про майбутнє л
                </p>
              </div>
              <div className={st.img}>
                <Image
                  className={st.image}
                  src='/s2.jpeg'
                  alt='Banner Image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </Transition>
          <hr />
          <Transition>
            <div className={st.item}>
              <div className={st.number}>1/</div>
              <div className={st.description}>
                <h2>ВИДАЛЕННЯ ЗУБІВ</h2>
                <p>
                  {' '}
                  Після ретельного огляду фідності можлива консультація інших лікарів, щоб виробити
                  індивідуальний план, який буде містити всю інформацію про майбутнє л
                </p>
              </div>
              <div className={st.img}>
                <Image
                  className={st.image}
                  src='/s3.png'
                  alt='Banner Image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  );
};

export default Servises;
