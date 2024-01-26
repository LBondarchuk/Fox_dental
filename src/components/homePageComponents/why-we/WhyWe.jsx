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
              <h2 className={st.itemTitle}>КОМЛЕКСНИЙ ПІДХІД</h2>
              <p className={st.description}>
                Індивідуальний підхід до кожного пацієнта, враховуючи його потреби та вподобання.
                Використання передових методів для точної інтерпретації стану пацієнта та розробки
                оптимального плану лікування.
              </p>
            </div>
            <div className={st.item}>
              <h2 className={st.itemTitle}>ПОВНИЙ СПЕКТР ПОСЛУГ</h2>
              <p className={st.description}>
                Регулярні чищення, полірування та професійні рекомендації для збереження здоров'я
                ясен та зубів. Від простих процедур до складних хірургічних втручань та естетичної
                реконструкції.
              </p>
            </div>
            <div className={st.item}>
              <h2 className={st.itemTitle}>ВЛАСНА ЗУБОТЕХНІЧНА ЛАБОРАТОРІЯ</h2>
              <p className={st.description}>
                Створення та виготовлення унікальних протезів, які відповідають формі та функції
                природних зубів.Можливість внесення виправлень та покращень безпосередньо в
                лабораторії, забезпечуючи ефективний та індивідуальний результат.
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  );
};

export default WhyWe;
