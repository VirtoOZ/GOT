// npx json-server src/js/db/db.json
import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import { useGotData } from "../../contexts/useGotData";
import { Header, Footer, ErrorMessage } from "../ui";
import { ListDetalesSection, RandomSection } from "../Pages";
import { Intro } from "../Pages/Page/Intro/Intro";

export const App: FC = () => {
	const { errorStatus } = useGotData();

	const character = () => {
		return (<><Header />
			<main className="page">
				{
					errorStatus
						? <ErrorMessage />
						: (<>
							<RandomSection />
							<ListDetalesSection />
						</>)
				}</main>
			<Footer />
		</>)
	}

	return (
		<div className="wrapper__body">
			<div className="wrapper__container">
				<Router>
					<Intro />
					{
						<Routes>
							<Route path="/" element={character()} />
							<Route path="/GOT/" element={character()} />
							<Route path="/characters/" element={character()} />
						</Routes>
					}
					<div className="page__bg">
						<img src="img/app/got.jpg" alt="bg" />
					</div>
				</Router>
			</div >
		</div>
	);
};