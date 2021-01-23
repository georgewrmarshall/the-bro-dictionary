import React from 'react';

import { Text, Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

// Styles
import { StyledNavbar } from './styles';

export const Navbar = () => (
  <StyledNavbar>
    <Box p={3}>
      <Text fontSize="3xl" fontWeight="bold">
        The Bro Dictionary
      </Text>
      <Text>
        A collection of brocabulary to use when you're checking on your bros.
      </Text>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Box>
  </StyledNavbar>
);
