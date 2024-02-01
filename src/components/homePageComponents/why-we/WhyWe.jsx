import { Transition } from '../../Transition';
import st from './WhyWe.module.scss';

const WhyWe = () => {
  return (
    <Transition>
      <div className={st.container}>
        <h1 className={st.title}>Чому ми</h1>
        <Transition>
          <div className={st.items}>
            <div className={st.item}>
              <h2 className={st.itemTitle}>КОМПЛЕКСНИЙ ПІДХІД</h2>
              <p className={st.description}>
                Індивідуальний підхід до кожного пацієнта, враховуючи його потреби та вподобання.
                Використання передових методів для точної інтерпретації стану пацієнта та розробки
                оптимального плану лікування.
              </p>
            </div>
            <div className={st.item}>
              <h2 className={st.itemTitle}>ПОВНИЙ СПЕКТР ПОСЛУГ</h2>
              <p className={st.description}>
                Регулярна професійна чистка зубів від наших лікарів, полірування та усі необхідні
                рекомендації для збереження здоров'я ясен та зубів. Від простих процедур до складних
                хірургічних втручань та естетичної реконструкції.
              </p>
            </div>
            <div className={st.item}>
              <h2 className={st.itemTitle}>ВЛАСНА ЗУБОТЕХНІЧНА ЛАБОРАТОРІЯ</h2>
              <p className={st.description}>
                Створення та виготовлення робіт будь-якої складності, які відповідають формі та
                функції природних зубів.Можливість корецій та покращень безпосередньо в лабораторії,
                забезпечує ефективний та природній результат.
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  );
};

export default WhyWe;
