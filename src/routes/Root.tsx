import {Navigate, useRoutes} from "react-router-dom";
import {Today} from "../pages/Today/Today.tsx";
import {Upcoming} from "../pages/Upcoming/Upcoming.tsx";

export const Root = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Navigate to="/today" replace />,
        },
        {
            path: '/today',
            element: <Today />,
        },
        {
            path: '/upcoming',
            element: <Upcoming />
        }
    ]);
    return routes;
}