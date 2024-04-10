'use client';

import { useGlobalContext } from '@/utils/context';
import ImageModal from '../../_components/Modal/ImageModal';
import { useState } from 'react';

import Image from 'next/image';

// Skeleton component for the image
const ImageSkeleton = () => (
  <div className="backdrop-blur-md bg-gray-100 w-3/4 animate-pulse rounded-md h-[330px] mx-auto"></div>
);

const EventImage = ({ imageData }) => {
  const { openImageModal } = useGlobalContext();
  const [imageLoaded, setImageLoaded] = useState(false);

  const blurDataURL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8+vx1PQMRgHFUIX0VAgAKVyAngaWJUwAAAABJRU5ErkJggg==';

  const handleImageClick = () => {
    openImageModal(imageData.filename);
  };

  if (!imageData.filename) {
    return <div>Event not found</div>;
  }

  return (
    <>
      {!imageLoaded && <ImageSkeleton />}
      <div className="flex justify-center ">
        <Image
          src={imageData.filename}
          alt={imageData.alt || 'Event Image'}
          priority={true}
          width="650"
          height="350"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="rounded-md shadow-lg max-h-80 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out "
          onClick={handleImageClick}
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        <ImageModal />
      </div>
    </>
  );
};
export default EventImage;
