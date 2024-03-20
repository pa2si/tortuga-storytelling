'use client';

import { useEffect, useState } from 'react';

export const useScrollBlurEffect = () => {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const blurValue = Math.min(5, (scrollY / windowHeight) * 10);
      setBlur(blurValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return blur;
};
