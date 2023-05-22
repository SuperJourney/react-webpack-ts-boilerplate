import React from "react";
import App from "../main"
import ErrorPage from "./error-page";
import Chatgpt from "./chatgpt/Chatgpt";
import Count from "./count/Count1"
import Count2 from "./count/Count2"
import {RouteObject} from "react-router"

const router :RouteObject[] = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/chat",
      element: <Chatgpt/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/co1",
      element: <Count/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/co2",
      element: <Count2 />,
      errorElement: <ErrorPage />,
    },
  ]

export default router