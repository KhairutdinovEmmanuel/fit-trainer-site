import { Header } from "../../../components/Header.tsx";
import { Title } from "../../../components/Title.tsx";
import { Button } from "../../../components/Button.tsx";
import { FitnessBanner } from "../../../components/FitnessBanner.tsx";
import PublicLayout from "../PublicLayout.tsx";

const HomePage = () => {
	return (
		<PublicLayout>
			<div className="d-flex align-items-center">
				<div>
					<Title variant="h1" className="text-white">
						Welcome to Fit Trainer
					</Title>
					<Title variant="h4" className="text-white">
						Start training with our app
					</Title>
					
					<Button className="mt-3 btn-lg btn-primary">
						Go <i className="bi bi-arrow-right ps-3 fs-4"></i>
					</Button>
				</div>
			</div>
			
			<FitnessBanner />
		</PublicLayout>
	)
}

export default HomePage;