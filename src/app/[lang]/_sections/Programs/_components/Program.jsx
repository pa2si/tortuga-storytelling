import Image from 'next/image';
import InView from './InView';
import { MotionArticle } from '@/utils/MotionDiv';
import { useRef } from 'react';

const Program = ({
  title,
  image,
  description1,
  description2,
  date,
  read_more,
  show_less,
  readMore,
  toggleReadMore,
}) => {
  const slideIn = {
    initial: {
      opacity: 0,
    },
    animate: () => ({
      opacity: 1,

      transition: {
        duration: 1,
      },
    }),
  };

  const articleRef = useRef(null);

  const handleToggleReadMore = () => {
    toggleReadMore(); // This will change the state in the parent component
    if (readMore && articleRef.current) {
      articleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <MotionArticle
        ref={articleRef}
        className="grid grid-cols-1 bg-white border-2  drop-shadow-2xl rounded-xl  xl:grid-cols-2 program-margin"
        variants={slideIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Program Description */}
        <div className="font-text flex flex-col p-4 xl:p-4 justify-center order-last xl:order-first">
          <h3 className="font-bold text-3xl xl:text-4xl mb-4 font-kalam">
            {title}
          </h3>
          <div className="text-gray-700 text-[1.4rem] sm:text-[1.5rem] md:text-[1.4rem] sm:text-justify">
            <div className="leading-8 sm:leading-10">
              {readMore ? (
                <>
                  {description1}
                  <br />
                  {description2}
                </>
              ) : (
                `${description1.substring(0, 200)}...`
              )}
              <p>
                <button
                  className="text-tortuga-dark text-[1.7rem] mt-2 font-abhayaLibre hover:text-tortuga-light transition-all duration-200 ease-in-out"
                  onClick={handleToggleReadMore}
                >
                  {readMore ? show_less : read_more}
                </button>
              </p>
            </div>
          </div>
        </div>
        {/* Program Image */}
        <div className="relative flex justify-center items-center w-full h-[14rem] mx-auto mb-20 sm:h-[18rem] md:h-[22rem] lg:h-[26rem] xl:mb-0 xl:place-self-center  order-first xl:order-last">
          <Image
            src={image.filename}
            alt={image.alt || 'Program Image'}
            priority={true}
            fill
            sizes="(max-width: 768px) 80vw, 33vw"
            className={`object-cover rounded-lg shadow-lg ${
              readMore ? 'xl:pr-3' : ''
            }`}
          />
        </div>
      </MotionArticle>
      <InView />
    </>
  );
};
export default Program;
