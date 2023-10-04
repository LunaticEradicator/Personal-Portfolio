import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomeScreen from "./screen/HomeScreen.tsx";
import ResumeScreen from "./screen/ResumeScreen.tsx";

import { store } from "./store/store.tsx";
import { Provider } from "react-redux";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="" element={<HomeScreen />} />
      <Route path="/resume" element={<ResumeScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
