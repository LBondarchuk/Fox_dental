// Loader.jsx

import React from 'react';
import st from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={st.container}>
      <div className={st.LoaderSpiner}></div>
    </div>
  );
};

export default Loader;
