import Image from 'next/image';
import InView from './_components/InView';

const About = ({ fetchedData }) => {
  const { title, description, image, title_logo, bg } = fetchedData;

  return (
    <>
      <div className="bg-test"></div>
      <section
        style={{
          backgroundImage: `url(${bg.filename})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="mobile-bg-adjust"
      >
        <div
          className="flex justify-center relative max-h-svh bg-gray-300 mx-4 bg-opacity-0  text-slate-50 overflow-auto sm:bg-opacity-40 xl:mx-0 rounded-lg"
          id="about"
        >
          <div className="my-10 sm:mx-8 max-w-6xl xl:mx-auto pt-8 pb-1 lg:py-12 lg:px-16 bg-white bg-opacity-95 rounded-xl">
            <div className=" flex justify-center items-center gap-4">
              {/* Title */}
              <div className="flex flex-col items-center">
                <h2 className="font-title text-black text-center">{title}</h2>
                <div className="relative w-full h-1 mt-8 sm:mt-4 md:mt-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent"></div>
                </div>
              </div>
              <Image
                src={title_logo.filename}
                alt={title_logo.alt}
                priority={true}
                width={100}
                height={80}
                className=" w-[100px] lg:w-[110px] mb-6 lg:mb-5"
                style={{ height: 'auto' }}
              />
            </div>
            {/* About Description */}
            <article className="grid grid-cols-1 text-slate-900 mt-8 mb-12 xl:grid-cols-5 lg:items-center lg:mb-8">
              <div className="col-span-3 px-4 sm:px-8 sm:text-xl lg:text-[1.2rem] text-justify lg:px-0 order-last xl:order-first xl:ml-10 ">
                <p className="text-gray-800 font-text leading-7 sm:leading-8 xl:leading-9 lg:mx-8">
                  {description}
                </p>
                <InView />
              </div>
              {/* Image  */}
              <div className="col-span-2 flex flex-col justify-center items-center xl:ml-16 order-first xl:order-last">
                <Image
                  src={image.filename}
                  alt={image.alt}
                  priority={true}
                  width={150}
                  height={250}
                  className=" mx-auto h-4/5 lg:h-full drop-shadow-lg rounded-xl "
                />
                <p className="mt-2 mb-4  ">{image.copyright}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
