import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import st from './Modal.module.scss';

function CustomModal({ show, setShow, children, isServise }) {
  const handleClose = (e) => {
    if (e.target.classList.contains(st.Container)) {
      setShow(false);
    }
  };

  const handleEscKey = (e) => {
    if (e.key === 'Escape') {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('keydown', handleEscKey);
    } else {
      document.removeEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [show]);

  return (
    <motion.div
      className={st.Container}
      animate={{
        scale: show ? 1 : 0,
        borderRadius: show ? 0 : '100%',
      }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.15 }}
      onClick={handleClose}
    >
      <div
        className={classNames(st.modal, {
          [st.servises]: isServise,
        })}
      >
        <div className={st.close}>
          <FaTimes className={st.icon} onClick={() => setShow(false)} />
        </div>
        <div className={st.children}>{children}</div>
      </div>
    </motion.div>
  );
}

export default CustomModal;
