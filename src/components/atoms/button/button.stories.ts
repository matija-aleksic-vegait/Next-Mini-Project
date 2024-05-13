import { Button } from "./button";

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
  },
};

export const Secondary = {
  args: {
    label: "Button",
    type: "button",
    className: "btn btn--secondary",
  },
};

export const NewElement = {
  args: {
    label: "New Element",
    type: "button",
    className: "btn btn--secondary btn--secondary--icon-left gray-hover",
  },
};

export const AlphabetLetterDefault = {
  args: {
    label: "A",
    type: "button",
    className: "application-content__alphabet__letter yellow-hover",
  },
};

export const AlphabetLetterSelected = {
  args: {
    label: "A",
    type: "button",
    className:
      "application-content__alphabet__letter application-content__alphabet__letter--selected yellow-hover",
  },
};

export const AlphabetLetterDisabled = {
  args: {
    label: "A",
    type: "button",
    className:
      "application-content__alphabet__letter application-content__alphabet__letter--disabled",
  },
};
