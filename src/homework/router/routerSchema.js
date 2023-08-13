import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout";
import Lesson5 from "../lesson5/home";
import Lesson2 from "../lesson2";
import Lesson3 from "../lesson3";
import Lesson4 from "../lesson4";
import Popular from "../lesson5/popular";
import Battle from "../lesson5/battle";
import Result from "../lesson5/battle/Result";

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Lesson5 />,
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
            path: "/lesson5/battle/result",
            element: <Result />,
        },
        {
            path: "*",
            element: <h2>Error</h2>,
        },
    ]
}])