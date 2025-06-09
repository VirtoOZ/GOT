import React, { Component } from "react";
import "./itemList.scss"

export default class ItemList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="haracter-list list">
				<li className="list__item">
					<span className="list__">John</span>
				</li>
				<li className="list__item">
					<span className="list__">Gender</span>
				</li>
				<li className="list__item">
					<span className="list__">Born</span>
				</li>
			</ul>
		)
	}
}