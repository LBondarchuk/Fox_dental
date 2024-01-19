'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import st from './NavLink.module.scss';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const NavLink = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname === item.link;
  return (
    <div className={classNames(st.container)}>
      <Link href={item.link} style={{ color: isActive ? '#daa520' : 'aliceblue' }}>
        {item.name}
      </Link>
    </div>
  );
};

export default NavLink;
