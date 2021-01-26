import React from 'react';

import { Text, Box } from '@chakra-ui/react';

export const Card = ({
  data = { word: 'Word', definition: 'Definition', example: 'Example' },
}) => {
  return (
    <Box borderWidth="1px" rounded="lg" p={[6, 6, 12]} textAlign="center">
      <Text
        style={{ textTransform: 'capitalize' }}
        fontSize={['3xl', '4xl', '6xl']}
        fontWeight="black"
        mb={3}
      >
        {data.word}
      </Text>
      <Text color="gray.400" fontSize={['lg', 'xl', '2xl']} mb={3}>
        <em>/ {data.phonetic} /</em>
      </Text>
      <Text fontSize={['lg', 'xl', '2xl']} mb={3}>
        {data.definition}
      </Text>
      <Box
        mt={[4, 9]}
        mb={[4, 9]}
        borderBottom="1px"
        borderColor="gray.200"
        maxWidth="420"
      />
      <Text
        color="gray.400"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="sm"
        mb={3}
      >
        <em>Example</em>
      </Text>
      <Text fontWeight="bold" fontSize={['lg', 'lg', '2xl']}>
        <em>"{data.example}"</em>
      </Text>
    </Box>
  );
};
