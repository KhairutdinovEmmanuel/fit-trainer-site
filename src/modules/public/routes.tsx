import { RouteObject } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import { RoutePaths } from "../../router/constants.ts";
import SingInPage from "./pages/SingInPage.tsx";

export const routes: RouteObject[] = [
	{
		path: RoutePaths.Home,
		element: <HomePage />
	},
	{
		path: RoutePaths.SingIn,
		element: <SingInPage />
	}
];
