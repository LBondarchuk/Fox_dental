'use client';
import { useState } from 'react';
import ServiseModal from '../../components/modals/serviseModal/ServiseModal';
import Servise from '../../components/servisesPageComponents/servise/Servise';
import st from './ServisesPage.module.scss';

const ServisesPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={st.container}>
      <ServiseModal setShow={setShowModal} show={showModal} header='Консультація та діагностика' />
      <h1 className={st.title}>НАШІ ПОСЛУГИ</h1>
      <div className={st.list}>
        <Servise onShpwModal={() => setShowModal(true)} />
        <Servise onShpwModal={() => setShowModal(true)} />
        <Servise onShpwModal={() => setShowModal(true)} />
        <Servise onShpwModal={() => setShowModal(true)} />
      </div>
    </div>
  );
};

export default ServisesPage;
