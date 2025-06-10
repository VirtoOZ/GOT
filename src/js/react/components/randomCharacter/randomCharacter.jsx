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
		// this.data = [
		// 	{
		// 		name: 'Aron Bolt',
		// 		gender: 'Male',
		// 		born: '1058',
		// 		died: '',
		// 		culture: 'Noth',
		// 	}
		// ]
	}

	gotService = new gotService();

	// state = {
	// 	name: null,
	// 	gender: null,
	// 	born: null,
	// 	died: null,
	// 	culture: null,
	// }

	state = {
		res: {}
	}

	componentDidMount() {
		this.updateCharacter();
		// console.log(this.data);
	}

	// onCharLoaded = (res) => {
	// 	this.setState({ res });
	// }

	onCharLoaded = (res) => {
		this.modifiedData(res);
		this.setState({ res });
	}

	// modifiedDatas = (data) => {
	// 	data.map((item) => {
	// 		addComents = (elem) => {
	// 			item.elem ? item.elem : item.elem = 'нет данных';
	// 		};
	// 		addComents(name);
	// 		addComents(gender);
	// 		addComents(born);
	// 		addComents(died);
	// 		addComents(culture);

	// item.name ? item.name : item.name = 'нет данных';
	// item.gender ? item.gender : item.gender = 'нет данных';
	// item.born ? item.born : item.born = 'нет данных';
	// item.died ? item.died : item.died = 'нет данных';
	// item.culture ? item.culture : item.culture = 'нет данных';
	// })
	// }

	modifiedData = (data) => {
		data.name ? data.name : data.name = 'нет данных';
		data.gender ? data.gender : data.gender = 'нет данных';
		data.born ? data.born : data.born = 'нет данных';
		data.died ? data.died : data.died = 'нет данных';
		data.culture ? data.culture : data.culture = 'нет данных';
	}

	updateCharacter() {
		const id = Math.floor(Math.random() * 140 + 25);
		this.gotService.getCharacter(id)
			.then(this.onCharLoaded);
	}

	render() {
		const { res: { name, gender, born, died, culture } } = this.state;
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
			</ListBlock >
		)
	}
}