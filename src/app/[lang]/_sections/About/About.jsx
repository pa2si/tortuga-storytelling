import Image from 'next/image';
import InView from './_components/InView';

const About = ({ fetchedData }) => {
  const { title, description, image, title_logo, bg } = fetchedData;

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${bg.filename})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className='mobile-bg-adjust'
      >
        {/* REMOVED sm:p-4 so the X-axis doesn't squeeze on tablets. Kept py-4 for spacing between sections. */}
        <div
          className='relative mx-4 py-10 sm:mx-0 lg:px-8 xl:px-0 rounded-lg bg-transparent sm:bg-gray-300 sm:bg-opacity-40 text-slate-50'
          id='about'
        >
          {/* Margins here (sm:mx-8 lg:mx-auto) now perfectly match the Events section */}
          <div className='max-w-6xl sm:mx-8 lg:mx-auto rounded-xl bg-white bg-opacity-95 pt-8 pb-4 sm:px-8 lg:px-16 lg:py-12'>
            <div className='flex justify-center items-center gap-4'>
              {/* Title */}
              <div className='flex flex-col items-center'>
                <h2 className='font-title text-black text-center'>{title}</h2>
                <div className='relative w-full h-1 mt-8 sm:mt-4 md:mt-1'>
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent'></div>
                </div>
              </div>
              <Image
                src={title_logo.filename}
                alt={title_logo.alt}
                priority={true}
                width={100}
                height={80}
                className='w-[100px] lg:w-[110px] mb-6 lg:mb-5'
                style={{ height: 'auto' }}
              />
            </div>

            {/* About Description */}
            <article className='mt-8 mb-8 grid grid-cols-1 gap-8 text-slate-900 lg:items-center xl:mb-8 xl:grid-cols-5'>
              <div className='order-last px-4 text-justify sm:px-8 sm:text-xl lg:px-0 lg:text-[1.2rem] xl:col-span-3 xl:order-first xl:ml-10'>
                <p className='text-gray-800 font-text leading-7 break-words sm:leading-8 xl:leading-9 lg:mx-8'>
                  {description}
                </p>
                <InView />
              </div>

              {/* Image */}
              <div className='order-first flex w-full flex-col items-center justify-center px-4 xl:col-span-2 xl:order-last xl:ml-16'>
                <Image
                  src={image.filename}
                  alt={image.alt}
                  priority={true}
                  width={150}
                  height={250}
                  className='mx-auto block h-auto w-full max-w-[220px] rounded-xl drop-shadow-lg'
                />
                <p className='mt-2 mb-4 text-center'>{image.copyright}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
