'use client';
import { useState } from 'react';
import Modal from '../modals/modal/Modal';
import Button from '../button/Button';
import NavLink from '../nav-link/NavLink';
import st from './TopActions.module.scss';
import { FiAlignJustify } from 'react-icons/fi';
import { FiAlignRight } from 'react-icons/fi';
import { AiFillPhone } from 'react-icons/ai';
import HeaderForm from '../forms/header-form/HeaderForm';
import { memo } from 'react';

const TopActions = memo(({ show, setShow, hasScroll }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={st.container}>
      <label>
        <div className={st.link}>
          <NavLink item={{ link: 'tel:+380973554125', name: '+38 (097) 355 41 25' }} />
        </div>
        <div className={st.mobileLink} style={{ color: show || hasScroll ? 'aliceblue' : 'black' }}>
          <NavLink
            item={{ link: 'tel:+380973554125', name: <AiFillPhone style={{ fontSize: 32 }} /> }}
          />
        </div>
      </label>
      <Modal show={showModal} setShow={setShowModal}>
        <HeaderForm setShowModal={setShowModal} />
      </Modal>
      <Button onClick={() => setShowModal(true)} />

      {!show ? (
        <FiAlignJustify className={st.icon} onClick={() => setShow(true)} />
      ) : (
        <FiAlignRight
          className={st.icon}
          onClick={() => setShow(false)}
          style={{ color: '#e5f3eb' }}
        />
      )}
    </div>
  );
});

export default TopActions;
