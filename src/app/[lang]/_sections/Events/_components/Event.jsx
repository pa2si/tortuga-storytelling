import Image from 'next/image';
import { useGlobalContext } from '@/utils/context';
import { CiCalendar } from 'react-icons/ci';
import { SlClock } from 'react-icons/sl';

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
  fb_logo,
  event_language,
  time,
  lang,
}) => {
  const { openModal } = useGlobalContext();

  const getButtonText = (lang) => {
    switch (lang) {
      case 'en':
        return 'More Info';
      case 'es':
        return 'Más Información';
      case 'de':
        return 'Mehr Infos';
      default:
        return 'More Info';
    }
  };

  return (
    <article className="flex flex-col max-w-sm min-h-[42rem] md:min-w-[20rem] lg:h-[45rem] md:mb-4 bg-white shadow-xl rounded overflow-hidden mx-auto ">
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
          <div
            className={`text-tortuga-dark text-[1.3rem] lg:text-[1.4rem] ${
              !time ? 'mb-3' : ''
            }`}
          >
            <div className="flex gap-2 items-center">
              <i className="text-2xl ">
                <CiCalendar />
              </i>
              <p>{date}</p>
            </div>
          </div>
          {time && (
            <div className="text-tortuga-dark text-[1.2rem] tracking-normal lg:text-[1.3rem] mb-3 leading-9 md:leading-8 flex gap-2">
              <div className="flex gap-2 items-center">
                <i className="text-xl  ml-[2px] mr-[1px]">
                  <SlClock />
                </i>
                <p>{time}</p>
              </div>
            </div>
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
          {getButtonText(lang)}
        </button>
      </div>
    </article>
  );
};
export default Event;
