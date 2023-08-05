import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "/src/App.scss";
import LandingPage from "@/components/pages/landingPage/LandingPage.component.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     // TODO - errorElement: <ErrorPage />,
//     // TODO - check loader: rootLoader out later
//     children: [
//       {
//         path: "/",
//         element: <LandingPage />,
//       },
//       {
//         path: "products",
//         element: </>,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
