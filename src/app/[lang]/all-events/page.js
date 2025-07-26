import Image from 'next/image';
import Link from 'next/link';
import { getFetchData } from '@/utils/fetchingData';
import { CiCalendar } from 'react-icons/ci';

export async function generateMetadata({ params: { lang } }) {
  const storyData = await getFetchData(lang);

  return {
    openGraph: {
      images: storyData.landing_page_meta_data.open_graph_whatsapp.filename,
    },
    twitter: {
      images: storyData.landing_page_meta_data.twitter_image.filename,
    },
    title: storyData.all_events_section.title,
    description: storyData.all_events_section.meta_data_description,
    alternates: {
      canonical: `/${lang}/all-events`,
      languages: {
        en: '/en/all-events',
        de: '/de/all-events',
        es: '/es/all-events',
      },
    },
  };
}

const AllEvents = async ({ params: { lang } }) => {
  const storyData = await getFetchData(lang);

  const { title, btn_text, moreInfo_btn_text, hover_text, bg } =
    storyData.all_events_section;

  const { event_cards } = storyData.events_section;

  if (!event_cards) {
    throw new Error('oops...no Events found!');
  }

  // Sort event cards from furthest away to oldest
  const sortedEventCards = [...event_cards].sort(
    (a, b) => new Date(b.date_sort) - new Date(a.date_sort)
  );

  return (
    <section
      className='min-w-screen min-h-svh flex items-center justify-center'
      style={{
        backgroundImage: `linear-gradient(to right, rgba(180, 180, 180, 0.37),  rgba(180, 180, 180, 0.37)), url(${bg.filename})`,
        /*      backgroundAttachment: 'fixed', */
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <article className=' flex flex-col max-w-6xl max-h-content m-auto mt-20 mb-2 sm:mt-22 mx-4 pt-3 sm:p-3 pb-8 sm:mx-8 md:p-8 bg-white bg-opacity-95 rounded-xl '>
        {/* title */}
        <div className=' flex flex-col justify-center items-center mb-8'>
          <div className='flex flex-col items-center'>
            <h2 className='font-title text-black text-center'>{title}</h2>
            <div className='relative w-full h-1 mt-7 sm:mt-4 md:mt-1'>
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent'></div>
            </div>
          </div>
        </div>
        {/* events container */}
        <ul className='flex flex-wrap gap-3 justify-center sm:gap-10 '>
          {sortedEventCards.map((event) => {
            // console.log('lang is', lang);
            const singleEventUrl = `/${lang}/all-events/${event._uid}`;

            return (
              <li
                key={event._uid}
                className='flex flex-col sm:min-w-[12rem] border-2 border-tortuga-light bg-opacity-80 w-[10rem] md:w-[15rem] group rounded-lg hover:scale-105 transition-all duration-400 ease-in-out'
              >
                <Link
                  href={singleEventUrl}
                  className='block relative w-full h-[9rem] sm:h-[12rem] shadow-lg '
                >
                  <Image
                    src={event.image.filename}
                    alt={event.image.alt}
                    priority={true}
                    fill={true}
                    sizes='30vw'
                    className='object-cover absolute rounded-md'
                  />
                  <div className='flex justify-center items-center opacity-0 group-hover:opacity-100 absolute inset-0 bg-gray-600 bg-opacity-60 transition-opacity duration-400 ease-in-out visibility-hidden group-hover:visibility-visible'>
                    <span className='text-white text-lg'>{hover_text}</span>
                  </div>
                </Link>

                <div className=' py-4 flex-grow mx-2'>
                  <h3 className='text-lg leading-5 sm:leading-7 sm:text-2xl mb-2 font-kalam'>
                    {event.title}
                  </h3>
                  <div className=' mb-2  text-tortuga-dark '>
                    <div className='flex gap-2 items-center'>
                      <i className='text-xl '>
                        <CiCalendar />
                      </i>
                      <p>{event.date}</p>
                    </div>
                  </div>
                </div>
                <div className='text-sm px-6 ot-1 sm:pt-4 pb-2 flex justify-center xl:hidden '>
                  <Link
                    href={singleEventUrl}
                    className='bg-tortuga-dark hover:bg-tortuga-light text-white font-kalam py-2 px-4 rounded transition-all duration-200 ease-in-out'
                  >
                    {moreInfo_btn_text}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
        <button className=' w-fit mx-auto mt-16 text-md sm:text-xl hover:text-tortuga-light text-tortuga-dark border-2 border-tortuga-dark hover:border-tortuga-light font-kalam py-1 px-4 rounded transition-all duration-200 ease-in-out'>
          <Link href={`/${lang}`}>{btn_text}</Link>
        </button>
      </article>
    </section>
  );
};
export default AllEvents;
