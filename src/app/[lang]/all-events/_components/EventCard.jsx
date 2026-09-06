import Image from 'next/image';
import Link from 'next/link';
import { CiCalendar } from 'react-icons/ci';

const EventCard = ({
  event,
  lang,
  hover_text,
  moreInfo_btn_text,
  isPriority = false,
}) => {
  const singleEventUrl = `/${lang}/all-events/${event._uid}`;

  return (
    <li className='flex flex-col sm:min-w-[12rem] border-2 border-tortuga-light bg-opacity-80 w-[10rem] md:w-[15rem] group rounded-lg hover:scale-105 transition-all duration-400 ease-in-out'>
      <Link
        href={singleEventUrl}
        className='block relative w-full h-[9rem] sm:h-[12rem] shadow-lg '
      >
        <Image
          src={event.image.filename}
          alt={event.image.alt}
          priority={isPriority}
          fill={true}
          sizes='30vw'
          className='object-cover absolute rounded-md'
        />
        <div className='flex justify-center items-center opacity-0 group-hover:opacity-100 absolute inset-0 bg-gray-600 bg-opacity-60 transition-opacity duration-400 ease-in-out visibility-hidden group-hover:visibility-visible'>
          <span className='text-white text-lg'>{hover_text}</span>
        </div>
      </Link>

      <div className=' py-4 flex-grow mx-2'>
        <h3 className='text-lg leading-5 sm:leading-7 sm:text-2xl mb-2 font-kalam'>
          {event.title}
        </h3>
        <div className=' mb-2  text-tortuga-dark '>
          <div className='flex gap-2 items-center'>
            <i className='text-xl '>
              <CiCalendar />
            </i>
            <p>{event.date}</p>
          </div>
        </div>
      </div>
      <div className='text-sm px-6 pt-1 sm:pt-4 pb-2 flex justify-center xl:hidden '>
        <Link
          href={singleEventUrl}
          className='bg-tortuga-dark hover:bg-tortuga-light text-white font-kalam py-2 px-4 rounded transition-all duration-200 ease-in-out'
        >
          {moreInfo_btn_text}
        </Link>
      </div>
    </li>
  );
};

export default EventCard;
