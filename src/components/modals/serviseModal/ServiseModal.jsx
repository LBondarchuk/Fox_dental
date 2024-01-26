import CustomModal from '../modal/Modal';
import st from './ServiseModal.module.scss';

const ServiseModal = ({ setModalItem, modalItem }) => {
  const data = modalItem ? [...modalItem.description.split('*')] : '';
  return (
    <div className={st.container}>
      <CustomModal
        setShow={() => setModalItem('')}
        show={modalItem ? true : false}
        header={modalItem.name}
        isServise
      >
        <h1>{modalItem.name}</h1>
        {data.length > 1
          ? data.map((item, i, arr) => {
              if (i === 0) return <p>{item}</p>;
              if (i === arr.length - 1) return <p style={{ marginTop: 20 }}>{item}</p>;

              return <li className={st.li}>{item}</li>;
            })
          : data}
      </CustomModal>
    </div>
  );
};

export default ServiseModal;
