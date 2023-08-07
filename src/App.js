import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Lesson2 from "./homework/lesson2/Lesson2";
import Lesson3 from "./homework/lesson3/Lesson3";
import Lesson4 from './homework/lesson4/Lesson4';
import Lesson5 from './homework/lesson5/Lesson5';
import Layout from "./homework/layout/Layout";
import InitialState from "./homework/layout/InitialState";
import Popular from "./homework/lesson5/Popular";
import Battle from "./homework/lesson5/Battle";

const router = createBrowserRouter([{
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <InitialState />,
            },
            {
                path: "/lesson2",
                element: <Lesson2 />,
            },
            {
                path: "/lesson3",
                element: <Lesson3 />,
            },
            {
                path: "/lesson4",
                element: <Lesson4 />,
            },
            {
                path: "/lesson5",
                element: <Lesson5 />,
            },
            {
                path: "/lesson5/popular",
                element: <Popular />,
            },
            {
                path: "/lesson5/battle",
                element: <Battle />,
            },
            {
                path: "*",
                element: <h2>Error</h2>,
            },
        ]
    }])

const App = () => <RouterProvider router={router} />

export default App;
