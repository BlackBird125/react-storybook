import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    onClick: { action: "clicked" },
  },
};

export const Primary = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const CustomLabel = {
  args: {
    label: "カスタムラベル",
    variant: "primary",
  },
};
