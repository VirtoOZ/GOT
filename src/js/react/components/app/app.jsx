import React, { Component } from "react";
import AppHeader from "../header/header.jsx";
import RandomCharacter from "../randomCharacter/randomCharacter.jsx";
import DetalesCharacter from "../detalesCharacter/detalesCharacter.jsx";
import ItemList from "../itemList/itemList.jsx";
import "./app.scss";

export default class App extends Component {
	constructor(props) {
		super(props);

	};

	render() {
		return (
			<div className="app">
				<AppHeader />
				<main className="page">
					<section className="page__section">
						<div className="haracter-list__container">
							<RandomCharacter />
						</div>
					</section>
					<div className="page__box">
						<div className="box__container">
							<section className="page__section">
								<ItemList />
							</section>
							<section className="page__section">
								<DetalesCharacter />
							</section>
						</div>
					</div>
				</main>
				<div className="wrapper__bg">
					<img src="img/got.jpeg" alt="got.jpeg" />
				</div>
			</div>
		);
	}
};
