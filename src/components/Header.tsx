import { FC, PropsWithChildren } from "react";
import { Title } from "./Title.tsx";
import { Link } from "react-router-dom";
import { RoutePaths } from "../router/constants.ts";

type HeaderPropsT = {
	title?: string;
}

export const Header: FC<PropsWithChildren<HeaderPropsT>> = (props) => {
	return (
		<header className="w-100 mb-4">
			<div className="d-flex justify-content-between">
				{props.title && (
					<Link to={RoutePaths.Home}>
						<Title variant="h3" className="m-4 fw-bold">{props.title}</Title>
					</Link>
				)}

				<div className="d-flex align-items-center">
					<span className="p-3 fs-5 fw-medium text-white">
						<Link to={RoutePaths.SingIn}>Sing in</Link>
					</span>
					<span className="p-3 fs-5 fw-medium text-white">
						<Link to={RoutePaths.SingUp}>Sing up</Link>
					</span>
				</div>
			</div>

			{props.children}
		</header>
	)
}
