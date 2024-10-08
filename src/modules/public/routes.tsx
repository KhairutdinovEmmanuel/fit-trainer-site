import { RouteObject } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import SingInPage from "./pages/SingInPage.tsx";
import SingUpPage from "./pages/SingUpPage.tsx";
import { RoutePaths } from "../../router/constants.ts";

export const routes: RouteObject[] = [
	{
		path: RoutePaths.Home,
		element: <HomePage />,
	},
	{
		path: RoutePaths.SingIn,
		element: <SingInPage />
	},
	{
		path: RoutePaths.SingUp,
		element: <SingUpPage />
	}
];
