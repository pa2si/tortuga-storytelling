import SlickComp from './_components/SlickComp';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import InView from './_components/InView';
import Link from 'next/link';

const Events = ({ fetchedData, lang }) => {
  const { title, gallery_view_btn, slider_text, bg, event_cards } = fetchedData;

  const allEventsUrl = `/${lang}/all-events`;

  const futureEvents = event_cards
    .filter((event) => new Date(event.date_sort) >= new Date())
    .sort((a, b) => new Date(a.date_sort) - new Date(b.date_sort));

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to right, rgba(210, 210, 210, 0.45), rgba(0, 0, 0, 0.4), rgba(210, 210, 210, 0.45)), url(${bg.filename})`,
        backgroundSize: '140%',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="mobile-bg-adjust"
    >
      <div
        className="relative mx-4 max-h-svh overflow-auto bg-gray-100 bg-opacity-0 sm:mx-0 sm:bg-opacity-5 lg:mx-8 xl:mx-0 rounded-lg"
        id="events"
      >
        <div className=" pt-8 pb-36 sm:mx-8 max-w-6xl lg:mx-auto lg:pt-12 lg:pb-36 lg:px-16 bg-white bg-opacity-95 rounded-xl slider-events">
          {/* Title */}
          <div className=" w-full flex flex-col justify-center items-center xl:mb-0">
            <div className="flex flex-col items-center">
              <h2 className="font-title text-black text-center">{title}</h2>
              <div className="relative w-full h-1 mt-7 sm:mt-4 md:mt-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent"></div>
              </div>
            </div>
          </div>
          <SlickComp fetchedData={fetchedData} lang={lang} />
          <InView />
          {/* Conditionally render this div if more than one event card */}
          {futureEvents && futureEvents.length > 1 && (
            <div className="flex font-title text-xl absolute bottom-40 lg:bottom-32 left-1/2 transform -translate-x-1/2 visible md:hidden">
              <MdArrowBackIos />
              <p>{slider_text}</p>
              <MdArrowForwardIos />
            </div>
          )}
          <button className="flex leading-tight mb-1 text-2xl absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:text-tortuga-light text-tortuga-dark border-2 border-tortuga-dark hover:border-tortuga-light font-kalam pt-1 px-4 sm:px-4 rounded transition-all duration-200 ease-in-out">
            <Link href={allEventsUrl}>{gallery_view_btn}</Link>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Events;
