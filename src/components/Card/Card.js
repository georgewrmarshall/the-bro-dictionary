import React from 'react';

import { Text, Box } from '@chakra-ui/react';

export const Card = ({
  data = { word: 'Word', definition: 'Definition', example: 'Example' },
}) => {
  return (
    <Box borderWidth="1px" rounded="lg" p={[3, 4, 12]} m={[3, 4, 12]}>
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
  );
};
