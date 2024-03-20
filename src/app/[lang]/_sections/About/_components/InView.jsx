'use client';

import { useInView } from 'react-intersection-observer';
import { useGlobalContext } from '@/utils/context';
import { useEffect } from 'react';

const InView = () => {
  const { setIsAboutInView } = useGlobalContext();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    setIsAboutInView(inView);
  }, [inView, setIsAboutInView]);

  return <div ref={ref}></div>;
};
export default InView;
