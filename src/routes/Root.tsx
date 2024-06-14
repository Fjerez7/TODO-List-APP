import {Navigate, useRoutes} from "react-router-dom";
import {Today} from "../pages/Today/Today.tsx";
import {Inbox} from "../pages/Inbox/Inbox.tsx";
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
            path: '/inbox',
            element: <Inbox />
        },
        {
            path: '/upcoming',
            element: <Upcoming />
        }
    ]);
    return routes;
}