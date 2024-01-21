import Button from '../../button/Button';
import Modal from 'react-bootstrap/Modal';
import st from './Modal.module.scss';
import classNames from 'classnames';

function CustomModal({ show, setShow, children, header = 'Записатись', isServise }) {
  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName={classNames({ [st.customModal]: isServise })}
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{ textTransform: 'uppercase', fontSize: 32, fontWeight: 400, textAlign: 'center' }}
        >
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={st.container}>{children}</div>
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
