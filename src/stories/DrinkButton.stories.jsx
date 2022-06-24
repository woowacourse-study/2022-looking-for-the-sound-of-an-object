import DrinkButton from "components/DrinkSection/DrinkButton/DrinkButton";

export default {
  title: "Components/DrinkSection/DrinkButton",
  component: DrinkButton,
  argTypes: {
    children: { controls: "text" },
    disabled: { controls: "boolean" },
    price: { controls: "number" },
  },
};

const Template = (args) => <DrinkButton {...args} onClick={() => {}} />;

export const Default = Template.bind({});
Default.args = {
  children: "BUTTON",
  disabled: false,
  price: 1000,
};
Default.parameters = { controls: { exclude: ["type"] } };

export const Active = Template.bind({});
Active.args = {
  children: "BUTTON",
  disabled: false,
  price: 1000,
};
Active.parameters = { controls: { exclude: ["disabled", "type"] } };

export const Disabled = Template.bind({});
Disabled.args = {
  children: "BUTTON",
  disabled: true,
  price: 1000,
};
Disabled.parameters = { controls: { exclude: ["disabled", "type"] } };
