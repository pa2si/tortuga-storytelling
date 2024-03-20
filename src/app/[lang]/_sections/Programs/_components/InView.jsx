'use client';

import { useInView } from 'react-intersection-observer';
import { useGlobalContext } from '@/utils/context';
import { useEffect } from 'react';

const InView = () => {
  const { setIsProgramsInView } = useGlobalContext();
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    setIsProgramsInView(inView);
  }, [inView, setIsProgramsInView]);

  return <div ref={ref}></div>;
};
export default InView;
