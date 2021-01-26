import React from 'react';
import Slider from 'react-slick';
import { Box } from '@chakra-ui/react';

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
            <Box maxW="800px" m="0 auto" pb={12}>
              <Card data={slideData} />
            </Box>
          </div>
        );
      })}
    </Slider>
  );
};
