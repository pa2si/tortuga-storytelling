import Link from 'next/link';
import EventImage from './_components/EventImage';
import { getFetchData } from '@/utils/fetchingData';
import ShareButton from '../../components/shared/ShareButton';

export async function generateMetadata({ params: { lang, id } }) {
  const storyData = await getFetchData(lang);

  const events = storyData.events_section.event_cards;
  const selectedEvent = events.find((event) => event._uid === id);

  return {
    openGraph: {
      images: storyData.landing_page_meta_data.open_graph_whatsapp.filename,
    },
    // openGraph: {
    //   images: storyData.landing_page_meta_data.open_graph_image.filename,
    // },
    twitter: {
      images: storyData.landing_page_meta_data.twitter_image.filename,
    },
    title: selectedEvent.title,
    description: storyData.single_event_section.meta_data_description,
    alternates: {
      canonical: `/all-avents${id}`,
      languages: {
        'de-DE': `/de/all-events/${id}`,
        'en-US': `/en/all-events/${id}`,
        'es-ES': `/es/all-events/${id}`,
      },
    },
  };
}

export async function generateStaticParams() {
  const languages = ['de', 'en', 'es'];
  const storyData = await getFetchData(); // Replace with your logic to fetch event IDs
  const events = storyData.events_section.event_cards;
  const params = [];

  languages.forEach((lang) => {
    events.forEach((event) => {
      params.push({ lang, id: event._uid });
    });
  });

  return params;
}

const SingleEvent = async ({ params }) => {
  const lang = params.lang;
  const storyData = await getFetchData(lang);

  const events = storyData.events_section.event_cards;
  const backButton = storyData.single_event_section.single_event_back_btn;
  const bg = storyData.single_event_section.bg;

  // Find the specific event by matching the UID from params.id
  const selectedEvent = events.find((event) => event._uid === params.id);

  if (!selectedEvent) {
    console.error('Error: Event not found for id:', params.id);
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Oops...No event found
      </div>
    );
  }

  return (
    <article
      className="flex items-center justify-center min-h-screen min-w-screen md:pb-8"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(210, 210, 210, 0.4), rgba(170, 170, 170, 0.25), rgba(210, 210, 210, 0.45)), url(${bg.filename})`,
        backgroundSize: '140%',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-4 my-auto p-3 pb-8 md:p-8 lg:mx-8 mt-20 bg-white bg-opacity-95 rounded-xl shadow-lg">
        <div className="grid">
          <div className=" w-full">
            {/* Title */}
            <div className=" w-full flex flex-col justify-center items-center ">
              <div className="flex flex-col items-center mb-4 ">
                <h3 className="text-4xl mb-2 mt-4 font-kalam">
                  {selectedEvent.title}
                </h3>
                <div className="relative w-full h-1 mt-1 sm:mt-4 md:mt-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Image */}

            <div className="mx-auto sm:w-full lg:px-16">
              <EventImage imageData={selectedEvent.image} />
            </div>

            {/* Description */}

            <div className="mb-8 lg:mb-0 mt-8 text-justify">
              <p className="font-text text-gray-700 text-[1rem] leading-7 lg:leading-8">
                {selectedEvent.description}
              </p>
              <p className="font-text text-gray-700 text-[1rem] leading-7 lg:leading-8">
                {selectedEvent.description2}
              </p>
              {/* Line above the event address */}
              <div className="text-gray-600 mt-16 text-abhayaLibre italic">
                <div className="grid grid-col justify-end text-right">
                  <div className=" bg-tortuga-light h-[2px] mb-2 "></div>{' '}
                  {/* Line Element */}
                  <p
                    className={`text-tortuga-dark ${
                      !selectedEvent.time ? 'mb-3' : ''
                    }`}
                  >
                    {selectedEvent.date}
                  </p>
                  {selectedEvent.time && (
                    <p className="text-tortuga-dark mb-2">
                      {selectedEvent.time}
                    </p>
                  )}
                  <p>{selectedEvent.city}</p>
                  <p className="font-bold">{selectedEvent.location}</p>
                  <p>
                    {selectedEvent.address}, {selectedEvent.postal}
                  </p>
                  {selectedEvent.event_language && (
                    <p className="text-gray-700 mt-2">
                      {`(${selectedEvent.event_language})`}
                    </p>
                  )}
                  <div className="flex justify-end mt-2">
                    <ShareButton
                      eventTitle={selectedEvent.title}
                      shareBtnText={
                        storyData.single_event_section.share_btn_text
                      }
                      shareBtnDesktopCopiedText={
                        storyData.single_event_section
                          .share_btn_desktop_copied_text
                      }
                      shareBtnMobileSuccessText={
                        storyData.single_event_section
                          .share_btn_mobile_success_text
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href={`/${lang}/all-events/`}
              className="mt-4 sm:mt-8 text-md sm:text-lg text-tortuga-dark hover:text-tortuga-light border-2 border-tortuga-dark hover:border-tortuga-light font-kalam py-1 px-8 rounded transition-all duration-200 ease-in-out"
            >
              {' '}
              {backButton}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleEvent;
