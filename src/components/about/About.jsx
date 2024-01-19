import Image from 'next/image';
import st from './About.module.scss';
import { Transition } from '../Transition';

const About = () => {
  return (
    <Transition>
      <div className={st.container}>
        <Transition>
          <h2 className={st.title}>ПРО КЛІНІКУ</h2>
        </Transition>
        <Transition>
          <p className={st.description}>
            “Fox Dental” – сучасна стоматологія на Подолі, де проводяться всі види послуг. Наша
            зубна клініка оснащена всім необхідним обладнанням для вирішення будь-яких
            стоматологічних задач, фахівці регулярно підвищують свою кваліфікацію, щоб надавати вам
            професійну допомогу.
            <br />
            <br />
            Прийшовши в наш стоматологічний центр, ви потрапите в дбайливі руки зубного лікаря
            терапевта на консультацію. Після ретельного огляду фахівець надасть вам всю необхідну
            інформацію про проблеми, які вимагають якнайшвидшого вирішення. При необхідності можлива
            консультація інших лікарів, щоб виробити індивідуальний план, який буде містити всю
            інформацію про майбутнє лікування: порядок процедур, скільки знадобиться часу на
            лікування і яка його вартість.
          </p>
        </Transition>
        <Transition>
          <div className={st.imagesContainer}>
            <div className={st.left}>
              <div className={st.leftTop}>
                <Image src='/2.jpeg' alt='Banner Image' layout='fill' objectFit='cover' />
              </div>

              <div className={st.leftBottom}>
                <Image src='/b.jpeg' alt='Banner Image' layout='fill' objectFit='cover' />
              </div>
            </div>

            <div className={st.right}>
              <div className={st.rightTop}>
                {/* <Image src='/1.jpeg' alt='Banner Image' layout='fill' objectFit='cover' /> */}
              </div>
              <div className={st.rightBottom}>
                <p>
                  Стоматологічна клініка "Fox Dental" - це чудове співвідношення високої якості
                  послуг і адекватна ціна на лікування. Прийшовши до нас, ви будете посміхатися
                  частіше!
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  );
};

export default About;
