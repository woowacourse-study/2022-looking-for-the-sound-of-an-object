import SectionHeader from "components/common/SectionHeader/SectionHeader";

export default {
  title: "Components/common/SectionHeader",
  component: SectionHeader,
  argTypes: {
    children: { controls: "text" },
  },
};

const Template = (args) => <SectionHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "섹션 헤더입니다.",
};
