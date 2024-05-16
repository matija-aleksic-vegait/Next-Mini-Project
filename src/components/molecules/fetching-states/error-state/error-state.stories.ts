import { ErrorState } from "@molecules";

export default {
  title: "molecules/FetchingStates/ErrorState",
  component: ErrorState,
  parameters: {},
  tags: ["autodocs"],
};

export const Example = {
  args: {
    errorMessage: "Error 404: Not found",
  },
};
