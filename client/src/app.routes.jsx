import { createBrowserRouter } from "react-router";
import Home from "./features/home/Home";
import Login from "./features/auth/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;