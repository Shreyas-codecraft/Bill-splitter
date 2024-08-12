import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tip } from './Tip';

const meta: Meta<typeof Tip> = {
  title: 'App/Tip',
  component: Tip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
 args:{
  value:5
 }
};

export const Custom: Story = {
  args:{
   value:"custom"
  }
 };
 