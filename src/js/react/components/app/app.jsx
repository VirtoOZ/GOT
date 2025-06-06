import React, { Component } from "react";
import AppHeader from "../header/header.jsx";
import "./app.scss";

export default class App extends Component {
	constructor(props) {
		super(props);

	};

	render() {
		return (
			<div className="app">
				<AppHeader />
				<div className="wrapper__bg">
					<img src="img/got.jpeg" alt="got.jpeg" />
				</div>
			</div>
		);
	}
};
