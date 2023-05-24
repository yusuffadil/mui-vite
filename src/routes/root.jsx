import * as React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
]);

export default function Provider() {
    return (
        <RouterProvider router={router} />
    )
};