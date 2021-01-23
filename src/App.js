import React from 'react';
import Slider from 'react-slick';

import {
  Button,
  Text,
  Box,
  useDisclosure,
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

// Components
import { ModalAddWord, Navbar } from './components';

// Styles
import { StyledApp } from './styles';

// Content
import data from './content.json';

function App(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <ChakraProvider theme={theme}>
      <StyledApp {...props}>
        <Navbar />
        <Box>
          <Box>
            <Slider {...settings}>
              {data.map((data, i) => {
                return (
                  <div key={i}>
                    <Box
                      borderWidth="1px"
                      rounded="lg"
                      p={[3, 4, 12]}
                      m={[3, 4, 12]}
                    >
                      <Text
                        style={{ textTransform: 'capitalize' }}
                        fontSize={['2xl', '2xl', '5xl']}
                        fontWeight="bold"
                        mb={2}
                      >
                        {data.word}
                      </Text>
                      <Text fontSize={['xl', 'xl', '3xl']} mb={3}>
                        {data.definition}
                      </Text>
                      <Text fontSize={['md', 'md', '2xl']}>
                        <strong>Example:</strong> <em>"{data.example}"</em>
                      </Text>
                    </Box>
                  </div>
                );
              })}
            </Slider>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button onClick={onOpen} colorScheme="teal" size="lg">
              Add
            </Button>
            <Button
              isDisabled
              ml={1}
              colorScheme="teal"
              variant="outline"
              size="lg"
            >
              Share
            </Button>
          </Box>
        </Box>
        <ModalAddWord isOpen={isOpen} onClose={onClose} />
      </StyledApp>
    </ChakraProvider>
  );
}

export default App;
