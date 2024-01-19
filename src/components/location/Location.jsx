import { Transition } from '../Transition';
import HeaderForm from '../forms/header-form/HeaderForm';
import st from './Location.module.scss';

const Location = () => {
  return (
    <Transition>
      <div className={st.container}>
        <div className={st.form}>
          <HeaderForm />
        </div>
        <div className={st.map}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10421.766885910167!2d28.4549972!3d49.2301139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b7e32828e8f%3A0x9bed14e2ba36ff7d!2z0KTQtdGA0ZbQtNC1INC_0LvQsNC30LA!5e0!3m2!1suk!2sua!4v1705494951019!5m2!1suk!2sua'
            width='100%'
            height='100%'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </Transition>
  );
};

export default Location;
