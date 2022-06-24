import OutlinedButton from "components/common/OutlinedButton/OutlinedButton";

export default {
  title: "Components/common/OutlinedButton",
  component: OutlinedButton,
  argTypes: {
    children: { controls: "text" },
    disabled: { controls: "boolean" },
  },
};

const Template = (args) => <OutlinedButton {...args} onClick={() => {}} />;

export const Default = Template.bind({});
Default.args = {
  children: "BUTTON",
  disabled: false,
};
Default.parameters = { controls: { exclude: ["type"] } };

export const Active = Template.bind({});
Active.args = {
  children: "BUTTON",
  disabled: false,
};
Active.parameters = { controls: { exclude: ["disabled", "type"] } };

export const Disabled = Template.bind({});
Disabled.args = {
  children: "BUTTON",
  disabled: true,
};
Disabled.parameters = { controls: { exclude: ["disabled", "type"] } };
