import ActionListItem from "components/DrinkSection/ActionListItem/ActionListItem";

export default {
  title: "Components/DrinkSection/ActionListItem",
  component: ActionListItem,
  argTypes: {
    children: { controls: "text" },
  },
};

const Template = (args) => <ActionListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "아메리카노",
};
