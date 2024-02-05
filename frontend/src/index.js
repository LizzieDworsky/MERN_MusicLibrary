import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import MusicPage, { getAllSongs } from "./pages/MusicPage";
import SongDetailsPage from "./pages/SongDetailsPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MusicPage />,
                loader: getAllSongs,
            },
            {
                path: "song/details/:songId",
                element: <SongDetailsPage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
