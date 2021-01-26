import React from 'react';

import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    data: {
      word: { control: 'string' },
      phonetic: { control: 'string' },
      definition: { control: 'string' },
      example: { control: 'string' },
    },
  },
};

const Template = args => <Card {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  data: {
    word: 'Bilbro Baggins',
    phonetic: 'Baɪlbɔɪə Bdʒgɔɪns',
    definition: 'The bro that likes to go on adventures',
    example: 'Keen for an adventure today Bilbro Baggins?',
  },
};
