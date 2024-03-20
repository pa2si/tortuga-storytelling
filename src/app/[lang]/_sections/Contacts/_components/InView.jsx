'use client';

import { useInView } from 'react-intersection-observer';
import { useGlobalContext } from '@/utils/context';
import { useEffect } from 'react';

const InView = () => {
  const { setIsContactInView } = useGlobalContext();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    setIsContactInView(inView);
  }, [inView, setIsContactInView]);

  return <div ref={ref}></div>;
};
export default InView;
