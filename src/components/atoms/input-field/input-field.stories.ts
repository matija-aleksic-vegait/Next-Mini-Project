import { InputField } from "./input-field";

export default {
  title: "atoms/InputField",
  component: InputField,
  parameters: {},
  tags: ["autodocs"],
};

export const InputFieldExample = {
  args: {
    id: "project-search",
    className: "input-box__input-field input-box__input-field--icon--left",
    placeholder: "Input",
    type: "text",
    includeLabel: false,
  },
};
