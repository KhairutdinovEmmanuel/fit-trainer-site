import { createBrowserRouter } from "react-router-dom";
import { routes } from "../modules/public/routes.tsx";

export const router = createBrowserRouter([
	...routes
])