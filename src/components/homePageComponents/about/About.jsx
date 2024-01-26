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
          <p className={st.description}>
            У нашій стоматологічній клініці "Fox Dental" у Вінниці ви знаходитесь у безпечному
            просторі, де будь-які страхи перед візитами до стоматолога стають минулим. Ми розуміємо,
            наскільки важливо відчувати себе комфортно та безпечно, тому наші досвідчені лікарі
            прагнуть зробити ваше перебування у нашій клініці максимально приємним.
            <br />
            <br />
            Наші лікарі – це професіонали, готові надати вам не лише високий рівень комфорту, але й
            забезпечити надійний та безболісний догляд за вашими зубами. Ми використовуємо передове
            обладнання та новітні методики лікування, щоб гарантувати вам ефективне та якісне
            стоматологічне обслуговування. В "Fox Dental" ви зможете скористатися повним спектром
            стоматологічних послуг, охоплюючи професійну гігієну, лікування та естетичну
            реконструкцію. Ми працюємо, щоб ваша усмішка не лише виглядала чудово, але й служила
            здоров'ю вашого ротового порожнини. Обирайте "Fox Dental" – обирайте високий стандарт
            надійності, і ваша усмішка завжди буде у центрі уваги наших кваліфікованих фахівців.
            Нехай ваша подорож до здоров'я та краси почнеться з нами!
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
              <div className={st.rightTop}></div>
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
