import { LoadingStateEnum } from "../../../constants/loading-state-enum";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchWorkEntriesForGivenDateSpanAsync } from "./timesheet-async-methods";

//STATE
interface TimesheetState {
  loadingState: LoadingStateEnum;
  errorMessage: string;

  workEntries: Array<any>;
}

const initialState: TimesheetState = {
  loadingState: LoadingStateEnum.initial,
  errorMessage: "",
  workEntries: [],
};

//ACTIONS
const timesheetSlice = createSlice({
  name: "timesheetSlice",
  initialState,
  reducers: {
    function: (state, action: PayloadAction<string>) => {
      console.log("Function");
    },
  },
  extraReducers: (builder) => [
    builder.addCase(
      fetchWorkEntriesForGivenDateSpanAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (action.payload.length === 0)
          state.loadingState = LoadingStateEnum.empty;
        else state.loadingState = LoadingStateEnum.loaded;

        state.workEntries = action.payload;
      }
    ),
  ],
});

export const {} = timesheetSlice.actions;

export default timesheetSlice.reducer;
