import React, { Component } from "react";
// import "./randomCharacter.scss"
import styled from "styled-components";
import { ListBlock, ItemBlock, ItemLabelBlock, ItemValueBlock } from "../app/app.jsx";


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
		font-size: 25px;
`;

// const ItemLabelBlock = styled.span`
// 	font-weight: 700;
// `;

// const ItemValueBlock = styled.span`
// `;
//</СТИЛИ>=================================


export default class RandomCharacter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListBlock>
				<ItemTitleBlock>Random Character:
					<ItemValueBlock> John</ItemValueBlock>
				</ItemTitleBlock>
				<ItemBlock>
					<ItemLabelBlock>Gender</ItemLabelBlock>
					<ItemValueBlock>male</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemLabelBlock>Born</ItemLabelBlock>
					<ItemValueBlock>11.03.1039</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemLabelBlock>Dies</ItemLabelBlock>
					<ItemValueBlock>13.09.1089</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemLabelBlock>Culture</ItemLabelBlock>
					<ItemValueBlock>Anarchy</ItemValueBlock>
				</ItemBlock>
			</ListBlock>
		)
	}
}