import { Button } from "@atoms";
import "../../../../public/css/styles.css";

export default {
  title: "atoms/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    label: "Button",
    type: "button",
    className: "btn btn--primary",
    onClick: () => alert("Button clicked"),
  },
};

export const Secondary = {
  args: {
    label: "Button",
    type: "button",
    className: "btn btn--secondary",
    onClick: () => alert("Button clicked"),
  },
};
