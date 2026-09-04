import { getFetchData } from '@/utils/fetchingData';

export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.tortugastorytelling.de';
  const languages = ['de', 'en', 'es'];
  const storyData = await getFetchData();
  const { event_cards } = storyData.events_section;
  const lastModified = new Date();

  return languages.flatMap((lang) => [
    {
      url: `${baseUrl}/${lang}`,
      lastModified,
    },
    {
      url: `${baseUrl}/${lang}/all-events`,
      lastModified,
    },
    ...event_cards.map((card) => ({
      url: `${baseUrl}/${lang}/all-events/${card._uid}`,
      lastModified,
    })),
  ]);
}