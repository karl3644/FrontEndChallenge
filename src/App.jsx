import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import "src/index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     // TODO - errorElement: <ErrorPage />,
//     // TODO - check loader: rootLoader out later
//     children: [
//       {
//         path: "/",
//         element: <LandingPage test={"one"} link={"products"} />,
//       },
//       {
//         path: "products",
//         element: <LandingPage test={"two"} link={"/"} />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <h1>test</h1>
    </React.StrictMode>,
);
