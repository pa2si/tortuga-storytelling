'use client';

import Program from './Program';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const SlickComp = ({ fetchedData }) => {
  const { program_cards } = fetchedData;

  const [readMore, setReadMore] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    beforeChange: () => {
      setReadMore(false);
    },
    responsive: [
      {
        breakpoint: 641, //max width
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {program_cards.map((program) => {
        return (
          <Program
            key={program._uid}
            {...program}
            readMore={readMore}
            toggleReadMore={() => setReadMore(!readMore)}
          />
        );
      })}
    </Slider>
  );
};
export default SlickComp;
