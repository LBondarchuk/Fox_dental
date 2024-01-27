'use client';
import { useEffect, useState } from 'react';
import ServiseModal from '../../components/modals/serviseModal/ServiseModal';
import Servise from '../../components/servisesPageComponents/servise/Servise';
import st from './ServisesPage.module.scss';
import { fetchData } from '@/utils/api';
import Loader from '@/components/loader/Loader';

const ServisesPage = () => {
  const [modalItem, setModalItem] = useState(false);
  const [servises, setServises] = useState([]);

  useEffect(() => {
    fetchData('servises', setServises);
  }, []);

  return (
    <div className={st.container}>
      {servises.length > 0 ? (
        <>
          <ServiseModal setModalItem={setModalItem} modalItem={modalItem} />
          <h1 className={st.title}>НАШІ ПОСЛУГИ</h1>
          <div className={st.list}>
            {servises.map((item) => (
              <Servise onShowModal={() => setModalItem(item)} item={item} key={item.id} />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ServisesPage;
