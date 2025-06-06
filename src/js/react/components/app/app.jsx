import React, { Component } from "react";
import AppHeader from "../app-header/app-header.jsx";
import "./app.scss";

export default class App extends Component {
	constructor(props) {
		super(props);

	};

	render() {
		return (
			<div className="app">
				<AppHeader />
			</div>
		);
	}
};
