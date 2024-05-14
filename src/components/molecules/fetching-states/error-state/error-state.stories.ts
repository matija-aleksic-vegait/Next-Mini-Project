import { ErrorState } from "./error-state";

export default {
  title: "molecules/ErrorState",
  component: ErrorState,
  parameters: {},
  tags: ["autodocs"],
};

export const Example = {
  args: {
    errorMessage: "Error 404: Not found",
  },
};
