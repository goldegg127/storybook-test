import type { Meta, StoryObj } from '@storybook/react';
import NoticePage from './index';

const meta: Meta<typeof NoticePage> = {
  title: 'story1/Notice',
  component: NoticePage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof NoticePage>;
  
export const Public: Story = {};
