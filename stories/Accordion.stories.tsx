import type { Meta, StoryObj } from "@storybook/react";

import  AccordionComponent  from "../app/components/Accordion";

const meta: Meta<typeof AccordionComponent> = {
  component: AccordionComponent,
};

export default meta;
type Story = StoryObj<typeof AccordionComponent>;

export const Primary: Story = {
  render: () => <AccordionComponent />,
};