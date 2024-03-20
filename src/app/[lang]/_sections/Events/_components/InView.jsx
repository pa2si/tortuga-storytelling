'use client';

import { useInView } from 'react-intersection-observer';
import { useGlobalContext } from '@/utils/context';
import { useEffect } from 'react';

const InView = () => {
  const { setIsEventsInView } = useGlobalContext();
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    setIsEventsInView(inView);
  }, [inView, setIsEventsInView]);

  return <div ref={ref}></div>;
};
export default InView;
