import React from 'react'
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'

import router from "./router/router"

import "./scss/index.scss"

const App = () => (
  <div>
    <RouterProvider router={router} />
  </div>
)

export default App
