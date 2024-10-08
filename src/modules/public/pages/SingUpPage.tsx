import { ChangeEvent } from "react";
import PublicLayout from "../PublicLayout.tsx";
import { CardPage } from "../../../components/CardPage.tsx";
import { Paragraph } from "../../../components/Paragraph.tsx";
import { Input } from "../../../components/Input.tsx";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../../router/constants.ts";

const SingInPage = () => {
	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();

		// ... submitting
	}

	return (
		<PublicLayout>
			<CardPage title="Sign Up" subtitle="Please, enter yuor email and password">
				<form onSubmit={handleSubmit}>
					<Input label="Email" type="email" placeholder="example@gmail.com" />
					
					<Input label="Password" type="password" placeholder="******" />

					<Input label="Repeat password" type="repeatPassword" placeholder="******" />

					<div>
						<button type="submit" className="btn btn-primary fw-bold text-uppercase">Sign up</button>
					</div>

					<Paragraph variant="span">
						Have account? <Link to={RoutePaths.SingIn} className="text-decoration-underline">sing-in</Link>
					</Paragraph>
				</form>
			</CardPage>
		</PublicLayout>
	)
}

export default SingInPage;
