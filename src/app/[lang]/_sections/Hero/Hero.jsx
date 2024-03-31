'use client';

import Image from 'next/image';
import styles from './Hero.module.css';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ fetchedData }) => {
  const { image, bg } = fetchedData;

  const { scrollYProgress } = useScroll();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial size

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const blurProgress = useTransform(
    scrollYProgress,
    [0, 0.5],
    windowWidth > 786 ? ['blur(0px)', 'blur(20px)'] : ['blur(0px)', 'blur(0px)']
  );
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      style={{
        backgroundImage: `url(${bg.filename})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="mobile-bg-adjust"
    >
      <motion.section
        className={`relative h-[30rem] sm:h-[42rem] w-full  ${styles.heroContainer}`}
        style={{
          filter: blurProgress,
          opacity: opacityProgress,
        }}
      >
        <Image
          src={image.filename}
          fill={true}
          alt={image.alt}
          sizes="100vw"
          className="object-cover overflow-hidden absolute w-auto"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
      </motion.section>
    </section>
  );
};

export default Hero;
