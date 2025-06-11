import React, { Component } from "react";
// import "./randomCharacter.scss"
import styled from "styled-components";
import { ListBlock, ItemBlock, ItemLabelBlock, ItemValueBlock, SpinnerBlock } from "../app/app.jsx";
import gotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../errorMessage/errorMessage.jsx";

//<СТИЛИ>=================================

const ItemTitleBlock = styled.div`
	display: flex;
		justify-content: center;
		font-weight: 700;
		font-size: 22px;
`;

//</СТИЛИ>=================================



export default class RandomCharacter extends Component {

	constructor() {
		super();
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
		res: {},
		loading: true,
		error: false,
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
		})
	}

	componentDidMount() {
		this.updateCharacter();
	}

	onCharLoaded = (res) => {
		this.modifiedData(res);
		this.setState({
			res,
			loading: false,
		});
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
		// const id = 15000000;
		const id = Math.floor(Math.random() * 50 + 25);
		this.gotService.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError);
	}

	render() {
		const { res, loading, error } = this.state;

		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? <View res={res} /> : null;
		return (
			<ListBlock>
				{errorMessage}
				{spinner}
				{content}
			</ListBlock>
		)
	}
}

const View = ({ res }) => {
	const { name, gender, born, died, culture } = res;
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
};