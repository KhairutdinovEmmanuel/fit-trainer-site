import { RouteObject } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import { RoutePaths } from "../../router/constants.ts";

export const routes: RouteObject[] = [
	{
		path: RoutePaths.Home,
		element: <HomePage />
	}
];
