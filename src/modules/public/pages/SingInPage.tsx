import { ChangeEvent } from "react";
import PublicLayout from "../PublicLayout.tsx";
import { CardPage } from "../../../components/CardPage.tsx";
import { Paragraph } from "../../../components/Paragraph.tsx";
import { Input } from "../../../components/Input.tsx";

const SingInPage = () => {
	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();

		// ... submitting
	}

	return (
		<PublicLayout>
			<CardPage title="Sign In" subtitle="Please, enter yuor email and password">
				<form onSubmit={handleSubmit}>
					<Input label="Email" type="email" placeholder="example@gmail.com" />

					<Input label="Password" type="password" placeholder="******" />

					<div className="mb-3 form-check">
						<label className="w-100 form-label">
							<input type="checkbox" className="form-check-input" />

							<Paragraph variant="span" className="fw-medium">Check me out</Paragraph>
						</label>
					</div>

					<div>
						<button type="submit" className="btn btn-primary fw-bold text-uppercase">Sign in</button>
					</div>

					<Paragraph variant="span">first time user? sing-up</Paragraph>
				</form>
			</CardPage>
		</PublicLayout>
	)
}

export default SingInPage;
