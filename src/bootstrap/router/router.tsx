import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import About from "../pages/About";
import Home from "../pages/Home";
import React from "react";
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Index />,
            children: [
                {
                    path:"",
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                }
            ]
        },

    ]
)


export default router; 