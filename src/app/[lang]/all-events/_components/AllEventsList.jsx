'use client';

import { useState, useEffect, useTransition } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaSpinner } from 'react-icons/fa6';
import EventCard from './EventCard';

const BATCH_SIZE = 8;

const AllEventsList = ({
  allEvents = [],
  lang,
  hover_text,
  moreInfo_btn_text,
}) => {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [, startTransition] = useTransition();

  const hasMore = visibleCount < allEvents.length;

  const { ref, inView } = useInView({
    rootMargin: '300px 0px',
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasMore) {
      startTransition(() => {
        setVisibleCount((prev) =>
          Math.min(prev + BATCH_SIZE, allEvents.length),
        );
      });
    }
  }, [inView, hasMore, allEvents.length]);

  const visibleEvents = allEvents.slice(0, visibleCount);

  return (
    <>
      {/* events container */}
      <ul className='flex flex-wrap gap-3 justify-center sm:gap-10 '>
        {visibleEvents.map((event, index) => (
          <EventCard
            key={event._uid}
            event={event}
            lang={lang}
            hover_text={hover_text}
            moreInfo_btn_text={moreInfo_btn_text}
            isPriority={index < 4}
          />
        ))}
      </ul>

      {/* Sentinel / Loading indicator */}
      {hasMore && (
        <div
          ref={ref}
          className='w-full flex justify-center items-center py-10'
          aria-live='polite'
          aria-busy='true'
        >
          <div className='flex items-center gap-2 text-tortuga-dark text-2xl font-kalam'>
            <span className='animate-spin text-3xl'>
              <FaSpinner />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default AllEventsList;
