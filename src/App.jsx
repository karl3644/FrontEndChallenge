import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "/src/App.scss";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
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
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="about">About Us</Link>
            </div>
        ),
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
