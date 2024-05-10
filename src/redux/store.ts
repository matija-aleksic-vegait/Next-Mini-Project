import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/projects/redux/projects-slice";
import clientsReducer from "../features/clients/redux/clients-slice";
import timesheetReducer from "../features/timesheet/redux/timesheet-slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    projectsStore: projectsReducer,
    clientsStore: clientsReducer,
    timesheetStore: timesheetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
