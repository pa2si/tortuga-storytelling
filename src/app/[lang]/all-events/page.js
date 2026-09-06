import Link from 'next/link';
import { getFetchData } from '@/utils/fetchingData';
import AllEventsList from './_components/AllEventsList';

export async function generateMetadata({ params }) {
  const { lang } = await params;
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

const AllEvents = async ({ params }) => {
  const { lang } = await params;
  const storyData = await getFetchData(lang);

  const { title, btn_text, moreInfo_btn_text, hover_text, bg } =
    storyData.all_events_section;

  const { event_cards } = storyData.events_section;

  if (!event_cards) {
    throw new Error('oops...no Events found!');
  }

  // Sort event cards from furthest away to oldest
  const sortedEventCards = [...event_cards].sort(
    (a, b) => new Date(b.date_sort) - new Date(a.date_sort),
  );

  return (
    <section
      className='min-w-screen min-h-svh flex justify-center mobile-bg-adjust'
      style={{
        backgroundImage: `linear-gradient(to right, rgba(180, 180, 180, 0.37),  rgba(180, 180, 180, 0.37)), url(${bg.filename})`,
        backgroundAttachment: 'fixed',
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
        <AllEventsList
          allEvents={sortedEventCards}
          lang={lang}
          hover_text={hover_text}
          moreInfo_btn_text={moreInfo_btn_text}
        />
        <button className=' w-fit mx-auto mt-16 text-md sm:text-xl hover:text-tortuga-light text-tortuga-dark border-2 border-tortuga-dark hover:border-tortuga-light font-kalam py-1 px-4 rounded transition-all duration-200 ease-in-out'>
          <Link href={`/${lang}`}>{btn_text}</Link>
        </button>
      </article>
    </section>
  );
};
export default AllEvents;
