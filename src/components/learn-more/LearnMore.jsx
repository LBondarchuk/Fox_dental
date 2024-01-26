import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import st from './LearnMore.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

const LearnMoreIcon = ({ onClick, isGreen }) => {
  return (
    <button onClick={onClick}>
      <FaInfoCircle
        size={30}
        className={classNames(st.icon, {
          [st.green]: isGreen,
        })}
      />
    </button>
  );
};

export default LearnMoreIcon;
