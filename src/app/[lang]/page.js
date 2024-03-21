import Hero from './_sections/Hero/Hero';
import Events from './_sections/Events/Events';
import Modal from './_sections/Events/_components/Modal/Modal';
import Programs from './_sections/Programs/Programs';
import About from './_sections/About/About';
import Contacts from './_sections/Contacts/Contacts';
import { getFetchData } from '@/utils/fetchingData';

export async function generateMetadata({ params: { lang } }) {
  const storyData = await getFetchData(lang);

  return {
    openGraph: {
      images: storyData.landing_page_meta_data.open_graph_image.filename,
    },
    twitter: {
      images: storyData.landing_page_meta_data.twitter_image.filename,
    },
    title: 'Tortuga Storytelling',
    keywords: [storyData.landing_page_meta_data.keywords],
    description: storyData.landing_page_meta_data.description,
    category: storyData.landing_page_meta_data.category,
    icons: {
      icon: '/favicon.ico',
      apple: storyData.landing_page_meta_data.apple_touch_icon.filename,
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function Home({ params: { lang } }) {
  const storyData = await getFetchData(lang);
  // console.log('this is lang', lang);

  if (!storyData) {
    throw new Error('oops...there was an error!');
  }

  return (
    <main className="font-abhayaLibre ">
      <Hero fetchedData={storyData.hero_section} />
      <About fetchedData={storyData.about_section} />
      <Events fetchedData={storyData.events_section} lang={lang} />
      <Modal />
      <Programs fetchedData={storyData.programs_section} />
      <Contacts
        fetchedData={storyData.contacts_section}
        fetchedData2={storyData.contact_component}
        fetchedData3={storyData.imprint_section}
        fetchedData4={storyData.privacy_section}
      />
    </main>
  );
}
