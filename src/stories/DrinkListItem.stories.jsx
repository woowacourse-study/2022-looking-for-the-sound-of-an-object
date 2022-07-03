import DrinkListItem from "components/DrinkSection/DrinkListItem/DrinkListItem";

export default {
  title: "Components/DrinkSection/DrinkListItem",
  component: DrinkListItem,
  argTypes: {
    children: { controls: "text" },
  },
};

const Template = (args) => <DrinkListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "아메리카노",
};
