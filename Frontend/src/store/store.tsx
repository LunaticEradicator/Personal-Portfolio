import { configureStore } from "@reduxjs/toolkit";
import { projectApi } from "./apis/projectApi";

const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware),
  devTools: true,
});

export { store };
