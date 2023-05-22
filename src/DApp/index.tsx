import React from "react";
import routers from "./pages/router";

import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter
} from "react-router-dom";


const router = createHashRouter(
  routers
);


const Main = () => {
  return <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
}

export default Main



