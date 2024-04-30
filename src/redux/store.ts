import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./state/projectsSlice";

export const store = configureStore({
  reducer: {
    projectsStore: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
