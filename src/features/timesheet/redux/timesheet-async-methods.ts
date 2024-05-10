import { createAsyncThunk } from "@reduxjs/toolkit";
import TimesheetService from "../services/timesheet-service";

export const fetchWorkEntriesForGivenDateSpanAsync = createAsyncThunk(
  "projectsSlice/fetchWorkEntriesForGivenDateSpanAsync",
  async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return await TimesheetService.getAllWorkEntriesForUserForGivenDateSpan(
      data.userId,
      data.startDate,
      data.endDate
    ).then((response) => {
      return response;
    });
  }
);
