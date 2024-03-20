import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Event Details';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Import your data fetching utility
import { getFetchData } from '@/utils/fetchingData';

export default async function Image({ params: { id } }) {
  //   console.log('id = ', id);
  // Fetch event data
  const eventData = await getFetchData(id);
  const event = eventData?.events_section?.event_cards?.find(
    (e) => e._uid === id
  );

  // Handle case where event is not found
  if (!event) {
    // Return a default image or handle the error as needed
  }

  // ImageResponse JSX element
  const element = (
    <div tw="relative flex w-full h-full items-center justify-center">
      <div tw="absolute inset-0 flex">
        <img tw="flex-1" src={event.image.filename} alt={event.image.alt} />
        <div tw="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div tw="flex flex-col text-neutral-50 z-10">
        {/* Title */}
        <div tw="text-7xl font-bold">{event.title}</div>
        {/* You can add more content here */}
      </div>
    </div>
  );

  // ImageResponse options
  return new ImageResponse(element, {
    ...size,
    // Other options removed, since we're not using custom fonts
  });
}
