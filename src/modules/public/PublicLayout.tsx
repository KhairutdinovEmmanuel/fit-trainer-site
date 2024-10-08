import { FC, PropsWithChildren } from "react";
import { Header } from "../../components/Header.tsx";

const PublicLayout: FC<PropsWithChildren<{}>> = (props) => {
	return (
		<>
			<Header title="FIT TRAINER" />

			<main className="d-flex justify-content-center p-4">
				{props.children}
			</main>
		</>
	)
}

export default PublicLayout;
