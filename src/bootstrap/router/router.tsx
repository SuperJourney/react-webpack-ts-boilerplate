import { createBrowserRouter, RouteObject } from "react-router-dom";
import Index from "../pages/Index";
import About from "../pages/About";
import Home from "../pages/Home";
import React, { Children } from "react";

/** about */
const aboutRoutes: RouteObject[] = [
    {
        path: "",
        element: <Home />
    },
    {
        path: "about",
        element: <About />
    }
]


const mainRoute = {
    path: "/",
    element: <Index />,
    children: aboutRoutes
}

let rt: RouteObject[] = [];
rt = [mainRoute]

const router = createBrowserRouter(
    rt
)


export default router; 