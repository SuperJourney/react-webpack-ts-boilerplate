import React from "react";
import routers from "./pages/router";
import { Provider } from 'react-redux'


import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter
} from "react-router-dom";

import store from './store'

const router = createHashRouter(
  routers
);


const Main = () => {
  return <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
}

export default Main



