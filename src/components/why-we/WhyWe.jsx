import { Transition } from '../Transition';
import st from './WhyWe.module.scss';

const WhyWe = () => {
  return (
    <Transition>
      <div className={st.container}>
        <h1 className={st.title}>Чому ми</h1>
        <Transition>
          <div className={st.items}>
            <div className={st.item}>
              <h2 className={st.itemTitle}>ПРОФЕСІОНАЛІЗМ - В РОЗВИТКУ!</h2>
              <p className={st.description}>
                Наші лікарі - фахівці високого рівня, і вони не перестають розвиватися у своїй
                професійній сфері. Стоматологи клініки постійно вивчають нові методики і
                застосовують отримані знання і технології в повсякденній роботі.
              </p>
            </div>
            <div className={st.item}>
              <h2 className={st.itemTitle}>КРАЩЕ ОБЛАДНАННЯ ТА МАТЕРІАЛИ</h2>
              <p className={st.description}>
                Сучасна стоматологія оснащена якісним німецьким обладнанням Sirona. Матеріали, які
                використовуються в нашій клініці виготовляються в Америці, Німеччині і Японії.
              </p>
            </div>
            <div className={st.item}>
              <h2 className={st.itemTitle}>ЦІНУЄМО ЧАС КЛІЄНТІВ</h2>
              <p className={st.description}>
                Ми поважаємо ваш час і дотримуємося термінів виконання. Перед початком лікування в
                нашому стоматологічному кабінеті ви отримаєте план лікування, де будуть зафіксовані
                всі процедури, їх вартість і терміни виконання.
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  );
};

export default WhyWe;
