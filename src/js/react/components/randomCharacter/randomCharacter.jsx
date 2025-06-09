import React, { Component } from "react";
// import "./randomCharacter.scss"
import styled from "styled-components";
import { ListBlock, ItemBlock, ItemLabelBlock, ItemValueBlock } from "../app/app.jsx";
import gotService from "../../services/gotService.jsx";


//<СТИЛИ>=================================

// const ItemBlock = styled.li`
// 	padding: 10px 0;
// 	display: flex;
// 	justify-content: space-between;
// `;

const ItemTitleBlock = styled.div`
	display: flex;
		justify-content: center;
		font-weight: 700;
		font-size: 22px;
`;

// const ItemLabelBlock = styled.span`
// 	font-weight: 700;
// `;

// const ItemValueBlock = styled.span`
// `;
//</СТИЛИ>=================================


export default class RandomCharacter extends Component {

	constructor() {
		super();
		this.updateCharacter();
	}

	gotService = new gotService();
	state = {
		name: null,
		gender: null,
		born: null,
		died: null,
		culture: null,
	}
	updateCharacter() {
		const id = Math.floor(Math.random() * 140 + 25);
		this.gotService.getCharacter(id)
			.then((res) => {
				this.setState({
					name: res.name,
					gender: res.gender,
					born: res.born,
					died: res.died,
					culture: res.culture,
				})
			});
	}


	render() {
		const { name, gender, born, died, culture } = this.state;
		return (
			<ListBlock>
				<ItemTitleBlock>Random Character:
					<ItemValueBlock> {name}</ItemValueBlock>
				</ItemTitleBlock>
				<ItemBlock>
					<ItemLabelBlock>Gender</ItemLabelBlock>
					<ItemValueBlock>{gender}</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemLabelBlock>Born</ItemLabelBlock>
					<ItemValueBlock>{born}</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemLabelBlock>Dies</ItemLabelBlock>
					<ItemValueBlock>{died}</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemLabelBlock>Culture</ItemLabelBlock>
					<ItemValueBlock>{culture}</ItemValueBlock>
				</ItemBlock>
			</ListBlock>
		)
	}
}