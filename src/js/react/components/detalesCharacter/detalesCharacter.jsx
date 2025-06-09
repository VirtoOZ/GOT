import React, { Component } from "react";
import "./detalesCharacter.scss"

export default class DetalesCharacter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="haracter-list list">
				<div className="list__item_name">Detailes Character:
					<span className="list__">John</span>
				</div>
				<li className="list__item">
					<span className="list__">Gender</span>
					<span className="list__">male</span>
				</li>
				<li className="list__item">
					<span className="list__">Born</span>
					<span className="list__">11.03.1039</span>
				</li>
				<li className="list__item">
					<span className="list__">Dies</span>
					<span className="list__">13.09.1089</span>
				</li>
				<li className="list__item">
					<span className="list__">Culture</span>
					<span className="list__">Anarchy</span>
				</li>
			</ul>
		)
	}
}