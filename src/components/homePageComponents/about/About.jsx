import Image from 'next/image';
import st from './About.module.scss';
import { Transition } from '../../Transition';

const About = () => {
  return (
    <Transition>
      <div className={st.container}>
        <Transition>
          <h2 className={st.title}>ПРО КЛІНІКУ</h2>
        </Transition>
        <Transition>
          <div className={st.description}>
            <p>Стоматологія "Fox Dental" у Вінниці: безпечно, комфортно, приємно. </p>
            <p>
              Відвідування стоматолога може викликати у багатьох людей тривогу та страх. У нашій
              клініці "Fox Dental" ми розуміємо це, тому створили для наших пацієнтів безпечний та
              комфортний простір, де можна відчувати себе впевнено та спокійно.
            </p>
            <p>
              Лікарі "Fox Dental" – це досвідчені професіонали, які забезпечують комфортний,
              надійний та безболісний догляд за зубами. Ми використовуємо сучасне обладнання та
              методи лікування, щоб надати Вам ефективне та якісне стоматологічне обслуговування.
            </p>

            <p>
              У нашій клініці ви можете отримати повний спектр стоматологічних послуг, включаючи
              професійну гігієну, лікування та естетичну реконструкцію. Ми працюємо над тим, щоб
              ваша посмішка була не лише красивою, але й здоровою. Обравши "Fox Dental", ви оберете
              високий стандарт якості.{' '}
            </p>
            <p>
              Ваша усмішка завжди буде в центрі уваги наших кваліфікованих фахівців. Почніть свою
              подорож до здоров'я та краси разом з нами!
            </p>
          </div>
        </Transition>
        <Transition>
          <div className={st.imagesContainer}>
            <div className={st.left}>
              <div className={st.leftTop}>
                <Image src='/2.jpeg' alt='Banner Image' fill style={{ objectFit: 'cover' }} />
              </div>

              <div className={st.leftBottom}>
                <Image src='/b.jpeg' alt='Banner Image' fill style={{ objectFit: 'cover' }} />
              </div>
            </div>

            <div className={st.right}>
              <div className={st.rightTop}></div>
              <div className={st.rightBottom}>
                <p>
                  Стоматологічна клініка "Fox Dental" - це чудове співвідношення високої якості
                  послуг і адекватної ціни на лікування. Прийшовши до нас, ви будете посміхатися
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
