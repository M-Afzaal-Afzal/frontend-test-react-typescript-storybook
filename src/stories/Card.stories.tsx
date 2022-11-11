import {ComponentStory, ComponentMeta} from '@storybook/react';
import CardMedia from '../assets/CardMedia.png';

import {CustomLayerCard} from "../components/CustomLayerCard";
import React from "react";

export default {
  title: 'Components/CustomLayerCard',
  component: CustomLayerCard,
  argTypes: {
    cardImg: {defaultValue: CardMedia},
    checkboxText: {defaultValue: 'Checkbox'},
  }
} as ComponentMeta<typeof CustomLayerCard>;

const Template: ComponentStory<typeof CustomLayerCard> = (args) => <CustomLayerCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  checkboxText: 'Checkbox Text',
}
