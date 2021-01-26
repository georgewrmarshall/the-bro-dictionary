import React from 'react';

import { Button, Box, useDisclosure, ChakraProvider } from '@chakra-ui/react';

// Components
import { ModalAddWord, Navbar, Carousel, theme } from './components';

// Utils
import { useLocalStorageState } from './utils';

// Styles
import { StyledApp } from './styles';

// Content
import data from './content.json';

function App(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [slidesData, setSlidesData] = useLocalStorageState('slides-data', data);
  console.log('slidesData', slidesData);
  return (
    <ChakraProvider theme={theme}>
      <StyledApp {...props}>
        <Navbar />
        <Box>
          <Box>
            <Carousel slidesData={slidesData} />
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
        <ModalAddWord
          isOpen={isOpen}
          onClose={onClose}
          setSlidesData={setSlidesData}
          slidesData={slidesData}
        />
      </StyledApp>
    </ChakraProvider>
  );
}

export default App;
