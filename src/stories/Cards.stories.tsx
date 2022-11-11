import {ComponentMeta, ComponentStory} from "@storybook/react";
import {CustomLayerCards} from "../components/CustomLayerCards";

export default {
  title: 'Components/CustomLayerCards',
  component: CustomLayerCards,
} as ComponentMeta<typeof CustomLayerCards>;

const TemplateMany: ComponentStory<typeof CustomLayerCards> = (args) => <CustomLayerCards {...args}/>;

export const ManyCustomLayerCards = TemplateMany.bind({});

ManyCustomLayerCards.args = {
  noOfCards: 3,
}
