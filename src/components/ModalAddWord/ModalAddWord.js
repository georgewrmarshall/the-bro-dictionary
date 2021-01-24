import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Stack,
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText,
  useToast,
} from '@chakra-ui/react';

export const ModalAddWord = ({
  isOpen,
  onOpen,
  onClose,
  setSlidesData,
  slidesData,
}) => {
  const toast = useToast();
  const [values, setValues] = useState({
    word: '',
    definition: '',
    example: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    const copySlidesData = slidesData;
    // move entry to beginning of array
    copySlidesData.unshift(values);
    setSlidesData(copySlidesData);
    setValues({
      word: '',
      definition: '',
      example: '',
    });
    onClose();
    toast({
      title: `${values.word} was added!`,
      description: `${values.word} was added to the Bro Dictionary`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
  const handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    setValues({
      ...values,
      [id]: value,
    });
    console.log('values', values);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent style={{ borderRadius: '0.5rem' }}>
          <ModalHeader>Add Bro-word</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={5}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <FormControl>
                  <FormLabel htmlFor="word">Bro-word</FormLabel>
                  <Input
                    id="word"
                    value={values.word}
                    onChange={handleChange}
                    placeholder="Enter the bro-word"
                    size="lg"
                    isRequired
                  />
                  <FormHelperText id="word-helper-text">
                    Must contain the word "bro"
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="definition">Definition</FormLabel>
                  <Input
                    id="definition"
                    value={values.definition}
                    onChange={handleChange}
                    placeholder="Enter the definition"
                    size="lg"
                    isRequired
                  />
                  <FormHelperText id="word-helper-text">
                    Define your word (what is it?)
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="example">Example</FormLabel>
                  <Textarea
                    id="example"
                    value={values.example}
                    onChange={handleChange}
                    placeholder="Write an example on how to use your bro-word"
                    size="lg"
                    isRequired
                  />
                  <FormHelperText id="word-helper-text">
                    Give an example of your bro-word out in the wild
                  </FormHelperText>
                </FormControl>
                <Button colorScheme="teal" type="submit">
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
