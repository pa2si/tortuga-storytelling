import { getFetchData } from '@/utils/fetchingData';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const storyData = await getFetchData();

  const { event_cards } = storyData.events_section;

  const eventUrls = event_cards.map((card) => {
    return {
      url: `${baseUrl}/all-events/${card._uid}`,
      lastModified: new Date(),
    };
  });

  const sitemapUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/all-events`,
      lastModified: new Date(),
    },
    ...eventUrls,
  ];

  return sitemapUrls;
}
