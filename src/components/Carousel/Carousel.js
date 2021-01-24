import React from 'react';
import Slider from 'react-slick';

import { Text, Box } from '@chakra-ui/react';

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
            <Box borderWidth="1px" rounded="lg" p={[3, 4, 12]} m={[3, 4, 12]}>
              <Text
                style={{ textTransform: 'capitalize' }}
                fontSize={['2xl', '2xl', '5xl']}
                fontWeight="bold"
                mb={2}
              >
                {slideData.word}
              </Text>
              <Text fontSize={['xl', 'xl', '3xl']} mb={3}>
                {slideData.definition}
              </Text>
              <Text fontSize={['md', 'md', '2xl']}>
                <strong>Example:</strong> <em>"{slideData.example}"</em>
              </Text>
            </Box>
          </div>
        );
      })}
    </Slider>
  );
};
