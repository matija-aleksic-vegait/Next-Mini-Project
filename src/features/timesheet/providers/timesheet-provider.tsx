"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Timesheet from "../components/timesheet/timesheet";

function TimesheetProvider() {
  return (
    <Provider store={store}>
      <Timesheet />
    </Provider>
  );
}

export default TimesheetProvider;
