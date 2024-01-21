'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export const Transition = ({ children, bacground = '#fff' }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      style={{
        transition: 'all 0.8s ease',
        opacity: !inView ? 0 : 1,
        paddingTop: !inView ? 20 : 0,
      }}
    >
      {children}
    </div>
  );
};
