import Image from 'next/image';
import { email as contactEmail } from '@/app/[lang]/_sections/Header/_components/Navbar/data';
import { socialLinks } from '@/app/[lang]/_sections/Header/_components/Navbar/data';
import { motion } from 'framer-motion';
import InView from './InView';

const Contact = ({ fetchedData2 }) => {
  const { image, logo, text } = fetchedData2;
  const { email } = contactEmail[0];

  const variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.article
      className="grid grid-cols-1 lg:grid-cols-5  text-slate-900 lg:mt-8 mb-12 lg:mb-8  "
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="flex flex-col col-span-3 px-4 text-xl text-justify sm:text-2xl sm:px-8 lg:px-0 lg:mb-8 lg:text-left order-last lg:order-first ">
        <p className="text-gray-700 leading-8 sm:leading-9 tracking-wide text-center lg:text-left font-text text-xl xl:text-[1.3rem]">
          {`${text}:`}
        </p>
        <div className=" h-full flex flex-col items-center justify-center gap-4">
          <a
            href={`mailto:${email}`}
            className="text-tortuga-dark hover:text-tortuga-light text-2xl mt-8 md:text-3xl transition-all duration-200"
          >
            tortuga.storytelling@posteo.de
          </a>
          <InView />
          <ul className="flex gap-2">
            {socialLinks.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li
                  key={id}
                  className="text-3xl md:text-4xl text-tortuga-dark hover:text-tortuga-light hover:scale-105 transition-all duration-200"
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
          {/* Tortuga Logo */}
          <Image
            src={logo.filename}
            alt={logo.alt}
            priority={true}
            width={500}
            height={70}
            className=" w-5/6 sm:w-4/6 md:w-3/6 lg:w-5/6 xl:w-4/6 mx-auto  "
          />
        </div>
      </div>
      {/* Contact Image */}
      <div className="col-span-2 flex flex-col justify-center items-center md:my-4 lg:my-0 lg:ml-36 order-first lg:order-last">
        <Image
          src={image.filename}
          alt={image.alt}
          priority={true}
          width={130}
          height={400}
          className=" mx-auto h-4/5 sm:h-5/6  md:h-full lg:h-5/6 xl:h-full drop-shadow-lg rounded-xl "
        />
      </div>
    </motion.article>
  );
};
export default Contact;
