import Image from 'next/image';
import { useGlobalContext } from '@/utils/context';

const Event = ({
  title,
  image,
  description,
  description2,
  date,
  location,
  address,
  postal,
  city,
  event_link,
  btn_text,
  fb_logo,
  event_language,
  time,
}) => {
  const { openModal } = useGlobalContext();
  return (
    <article className="flex flex-col max-w-sm min-h-[42rem] md:min-w-[20rem] xl:max-h-[45rem] xl:my-10 xl:h-[37rem] 2xl:h-[40rem] md:mb-4 bg-white shadow-xl rounded overflow-hidden mx-auto ">
      <div className="relative w-full h-[17.3rem] shadow-lg">
        <Image
          src={image.filename}
          alt={image.alt}
          priority={true}
          fill={true}
          sizes="30vw"
          className="object-cover absolute"
        />
      </div>
      <span className="inline-block rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {image.copyright}
      </span>
      <div className="flex-grow px-6 py-4" style={{ fontFamily: 'arial' }}>
        <h3 className="text-[1.8rem] mb-2 font-kalam leading-9">{title}</h3>
        <div className="leading-7 text-[1.4rem] sm:text-[1.2rem]">
          <p
            className={`text-tortuga-dark text-[1.3rem] lg:text-[1.4rem] ${
              !time ? 'mb-3' : ''
            }`}
          >
            {date}
          </p>
          {time && (
            <p className="text-tortuga-dark text-[1.2rem] tracking-tight lg:text-[1.3rem] mb-3 leading-9 md:leading-8">
              {time}
            </p>
          )}
          {city && <p className="text-gray-700 font-bold">{city}</p>}
          <p className="text-gray-700 font-bold">{location}</p>
          <p className="text-gray-700 ">{address}</p>
          <p className="text-gray-700 ">{postal}</p>
          {event_language && (
            <p className="text-gray-700 mt-2 italic">{`(${event_language})`}</p>
          )}
        </div>
      </div>

      <div className="px-6 pt-4 pb-2 flex justify-center lg:text-[1rem]">
        <button
          className="bg-tortuga-dark hover:bg-tortuga-light text-white font-kalam py-2 px-4 rounded transition-all duration-200 ease-in-out"
          onClick={() =>
            openModal({
              image,
              date,
              location,
              city,
              address,
              postal,
              description,
              description2,
              event_link,
              title,
              fb_logo,
              event_language,
              time,
            })
          }
        >
          {btn_text}
        </button>
      </div>
    </article>
  );
};
export default Event;
