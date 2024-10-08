import { FC, PropsWithChildren } from "react";
import { Title } from "./Title.tsx";

type HeaderPropsT = {
	title?: string;
}

export const Header: FC<PropsWithChildren<HeaderPropsT>> = (props) => {
	return (
		<header className="w-100 mb-4">
			<div className="d-flex justify-content-between">
				{props.title && (
					<Title variant="h3" className="m-4 fw-bold">{props.title}</Title>
				)}

				<div className="d-flex align-items-center">
					<span className="p-3 fs-5 fw-medium text-white">
						Sing in
					</span>
					<span className="p-3 fs-5 fw-medium text-white">
						Sing up
					</span>
				</div>
			</div>

			{props.children}
		</header>
	)
}
