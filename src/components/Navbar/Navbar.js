import React from 'react';

import { Text, Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

// Styles
import { StyledNavbar } from './styles';

export const Navbar = () => (
  <StyledNavbar>
    <Box p={3} textAlign="center" maxW="sm" ml="auto">
      <Text fontSize="3xl" fontWeight="black" mb={3}>
        The Bro Dictionary
      </Text>
      <Text color="gray.400" fontSize="md">
        A collection of brocabulary to use when you're checking on your bros.
      </Text>
    </Box>
    <ColorModeSwitcher ml="auto" mb="auto" />
  </StyledNavbar>
);
