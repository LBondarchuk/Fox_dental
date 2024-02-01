import Image from 'next/image';
import st from './Servises.module.scss';
import { Transition } from '../../Transition';
import LearnMore from '../../learn-more/LearnMore';
import Link from 'next/link';

const Servises = () => {
  return (
    <Transition>
      <div className={st.container}>
        <Transition>
          <h1 className={st.title}>НАШІ ПОСЛУГИ</h1>
        </Transition>
        <div className={st.items}>
          <Transition>
            <Link href='/servises'>
              <div className={st.item}>
                <div className={st.learnMore}>
                  <LearnMore />
                </div>
                <div className={st.arrow}></div>
                <div className={st.number}>1/</div>
                <div className={st.description}>
                  <h2> ЕСТЕТИЧНА СТОМАТОЛОГІЯ</h2>
                  <p>
                    {' '}
                    Естетична послуга у нашій клініці - це високоспеціалізований підхід до
                    поліпшення естетики вашої посмішки та зовнішнього вигляду зубів. Ми пропонуємо
                    інноваційні процедури та технології, спрямовані на досягнення ідеальної гармонії
                    між здоров'ям та красою вашої посмішки.
                  </p>
                </div>
                <div className={st.img}>
                  <Image
                    className={st.image}
                    src='/s1.jpeg'
                    alt='Banner Image'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </Link>
          </Transition>
          <hr />
          <Transition>
            <Link href='/servises'>
              <div className={st.item}>
                <div className={st.learnMore}>
                  <LearnMore />
                </div>
                <div className={st.number}>2/</div>
                <div className={st.description}>
                  <h2>ТЕРАПЕВТИЧНА СТОМАТОЛОГІЯ</h2>
                  <p>
                    {' '}
                    Терапевтична стоматологія у нашій клініці - це важлива галузь, яка спрямована на
                    збереження та лікування Ваших зубів, відновлення їхньої функціональності та
                    вирішення різноманітних стоматологічних проблем. Наші досвідчені
                    лікарі-терапевти забезпечують повний спектр послуг для збереження Ваших зубів.
                  </p>
                </div>
                <div className={st.img}>
                  <Image
                    className={st.image}
                    src='/s2.jpeg'
                    alt='Banner Image'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </Link>
          </Transition>
          <hr />
          <Transition>
            <Link href='/servises'>
              <div className={st.item}>
                <div className={st.learnMore}>
                  <LearnMore />
                </div>
                <div className={st.number}>3/</div>
                <div className={st.description}>
                  <h2>ОРТОДОНТІЯ</h2>
                  <p>
                    {' '}
                    Ортодонтія у нашій стоматологічній клініці - це висококваліфікована галузь,
                    спрямована на виправлення неправильного росту зубів та неправильного
                    розташування щелеп з метою створення гармонійного природнього прикусу та
                    привабливої посмішки.
                  </p>
                </div>
                <div className={st.img}>
                  <Image
                    className={st.image}
                    src='/ортодонтнія.jpeg'
                    alt='Banner Image'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </Link>
          </Transition>
        </div>
      </div>
    </Transition>
  );
};

export default Servises;
