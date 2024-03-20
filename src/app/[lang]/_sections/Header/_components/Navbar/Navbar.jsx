'use client';

import { socialLinks, email, languages } from './data';
import { FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useGlobalContext } from '@/utils/context';

const Navbar = ({ fetchedData, lang }) => {
  const { menu_links, logo } = fetchedData;
  const [showLinks, setShowLinks] = useState(false);
  const [hidden, setHidden] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const { useScroll, useMotionValueEvent } = require('framer-motion');
  const { scrollY } = useScroll();

  const homeUrl = `/${lang}/`;

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 5) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const { isEventsInView, isProgramsInView, isAboutInView, isContactInView } =
    useGlobalContext();

  return (
    <motion.nav
      className={`p-1 font-title ${styles.navbar}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <div
        className={` mx-auto max-w-screen-2xl pr-2 xl:px-10  ${styles.nav_center}`}
      >
        {/* header */}

        <section className={styles.nav__header}>
          <Link href={homeUrl}>
            <Image
              href={'/'}
              src={logo.filename}
              alt={logo.alt}
              priority={true}
              width="260"
              height="260"
              className="w-3/4 lg:4/4 xl:w-5/6"
            />
          </Link>
          <button
            className={`text-tortuga-dark hover:text-tortuga-light ${styles.nav__toggle}`}
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </section>

        {/* Menu Links */}

        <motion.section
          className={styles.links__container}
          ref={linksContainerRef}
          style={linkStyles}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: 'easeInOut' }}
        >
          <ul
            className={` text-[1.2rem] md:gap-[1.1rem] mb-[-0.3rem] lg:mr-0 lg:gap-4 xl:gap-8 ${styles.links} ${styles.menu__links}`}
            ref={linksRef}
          >
            {menu_links.map((link) => {
              let className = '';
              if (link.url === '#events' && isEventsInView) {
                className = '!text-tortuga-dark';
              } else if (link.url === '#programs' && isProgramsInView) {
                className = '!text-tortuga-dark';
              } else if (link.url === '#about' && isAboutInView) {
                className = '!text-tortuga-dark';
              } else if (link.url === '#contact' && isContactInView) {
                className = '!text-tortuga-dark';
              }

              const { id, url, menu_name } = link;
              return (
                <li key={id} className="hover:text-tortuga-light">
                  <Link
                    className={className}
                    href={`/${lang}${url}`}
                    onClick={toggleLinks}
                  >
                    {menu_name}
                  </Link>
                </li>
              );
            })}
            {/* language buttons */}
            <div className="flex gap-1 items-center  text-tortuga-dark text-[1rem] lg:gap-2 lg:mr-2 xl:text-lg xl:gap-3 ml-4 xl:ml-20">
              {languages.map((language) => {
                const { id, url, text } = language;
                return (
                  <li
                    key={id}
                    className="font-kalam hover:scale-105 hover:text-tortuga-light transition-all duration-200 ease-in-out "
                  >
                    <Link href={url}>{text}</Link>
                  </li>
                );
              })}
            </div>
          </ul>
          {/* email */}

          <ul className={`  xl:ml-20 ${styles.social__icons}`}>
            {email.map((item) => {
              const { id, email, icon } = item;
              return (
                <li
                  key={id}
                  className={`${styles.mailIcon} text-2xl text-tortuga-dark hover:text-tortuga-light hover:scale-105 transition-all duration-200 ease-in-out`}
                >
                  <a href={`mailto:${email}`}>{icon}</a>
                </li>
              );
            })}
          </ul>

          {/* social media */}

          <ul className={`${styles.social__icons}`}>
            {socialLinks.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li
                  key={id}
                  className="text-xl text-tortuga-dark hover:text-tortuga-light hover:scale-105 transition-all duration-200 ease-in-out"
                >
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.section>
      </div>
    </motion.nav>
  );
};

export default Navbar;
