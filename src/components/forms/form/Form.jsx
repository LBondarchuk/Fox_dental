import Button from '@/components/button/Button';
import st from './Form.module.scss';
const Form = ({ children, onSend }) => {
  return (
    <form className={st.container} onSubmit={onSend}>
      {children}
      <div style={{ marginLeft: 'auto' }}>
        <Button />
      </div>
    </form>
  );
};

export default Form;
