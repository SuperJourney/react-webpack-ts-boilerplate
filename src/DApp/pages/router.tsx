import React from "react";
import App from "../main"
import ErrorPage from "./error-page";
import Chatgpt from "./chatgpt/chatgpt";

const router :any = [
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
  ]

export default router