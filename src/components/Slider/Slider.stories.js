import React from 'react';

import { Slider } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
};

const Template = args => <Slider {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
