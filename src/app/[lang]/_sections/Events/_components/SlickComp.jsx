'use client';

import Slider from 'react-slick';
import Event from './Event';
import { MotionDiv } from '@/utils/MotionDiv';

const SlickComp = ({ fetchedData, lang }) => {
  const { event_cards } = fetchedData;

  const slideIn = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: () => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    }),
  };

  // Filter out past events and sort by date_sort
  const futureEvents = event_cards
    .filter((event) => new Date(event.date_sort) >= new Date())
    .sort((a, b) => new Date(a.date_sort) - new Date(b.date_sort));

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // centerPadding: '60px',

    responsive: [
      {
        breakpoint: 640, //max width
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <MotionDiv
      variants={slideIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Slider {...settings}>
        {futureEvents.map((event) => (
          <Event key={event._uid} {...event} lang={lang} />
        ))}
      </Slider>
    </MotionDiv>
  );
};

export default SlickComp;
