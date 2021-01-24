import React from 'react';
import Slider from 'react-slick';

import { Card } from '../Card';

export const Carousel = ({ slidesData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    centerMode: true,
    lazyLoad: true,
    // nextArrow: <Button colorScheme="teal" size="lg" children="Next" />,
    // prevArrow: <Button colorScheme="teal" size="lg" children="Previous" />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {slidesData.map((slideData, i) => {
        return (
          <div key={i}>
            <Card data={slideData} />
          </div>
        );
      })}
    </Slider>
  );
};
