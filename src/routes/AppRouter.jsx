import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login and Register/Pages/Login";
import Register from "../Components/Login and Register/Pages/Register";
import Home from "../Components/Home/Home";
import App from "../App";
import NotificationList from "../Components/NotificationList/NotificationList";
import { AuthRoute } from "./AuthRoute";
import NotificationHome from "../Components/NotificationHome/NotificationHome";
import { registerSW } from 'virtual:pwa-register';
registerSW();
const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <AuthRoute><NotificationHome /></AuthRoute> },
            { path: "/notification-list", element: <AuthRoute><NotificationList /></AuthRoute> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> }
        ]
    }
])

export default AppRouter;