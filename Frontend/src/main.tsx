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
import ContactScreen from "./screen/ContactScreen.tsx";
import ResumeScreen from "./screen/ResumeScreen.tsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="" element={<HomeScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/resume" element={<ResumeScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
