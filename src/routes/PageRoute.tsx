import { useRoutes } from "react-router-dom";
import Tutorials from "../pages/tutorial/Tutorials";
import Home from "../pages/home/Home";


export default function PageRoute (){ 
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/tutorials',
            element: <Tutorials />
        }
    ])

    return routes;
}

