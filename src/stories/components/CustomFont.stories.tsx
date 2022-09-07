import { CustomFont } from "../../components/CustomFont";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'UI/CustomFont',
    component: CustomFont
} as ComponentMeta<typeof CustomFont>

const Template: ComponentStory<typeof CustomFont> = (args) => <CustomFont {...args}  />