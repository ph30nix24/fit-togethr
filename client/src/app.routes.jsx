import { createBrowserRouter } from "react-router";
import Home from "./features/home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
]);

export default router;