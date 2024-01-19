import st from './Button.module.scss';

const Button = ({ variant = 'header', onClick, text = 'Записатись' }) => {
  return (
    <div className={st.container}>
      <button className={st[variant]} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
