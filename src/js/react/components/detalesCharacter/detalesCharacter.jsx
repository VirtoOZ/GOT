import React, { Component } from "react";
// import "./detalesCharacter.scss"
// import styled from "styled-components";
import { ListBlock, ItemBlock, ItemLabelBlock, ItemValueBlock } from "../app/app.jsx";


//<СТИЛИ>=================================

// const ItemBlock = styled.li`
// 	padding: 10px 0;
// 	display: flex;
// 	justify-content: space-between;
// `;

// const ItemLabelBlock = styled.span`
// 	font-weight: 700;
// `;

// const ItemValueBlock = styled.span`
// `;
//</СТИЛИ>=================================

export default class DetalesCharacter extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<ListBlock>
				<ItemBlock>
					<ItemValueBlock>John Snow</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemLabelBlock>Gender</ItemLabelBlock>
					<ItemValueBlock>male</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemLabelBlock>Born</ItemLabelBlock>
					<ItemValueBlock>1783</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemLabelBlock>Dies</ItemLabelBlock>
					<ItemValueBlock>1820</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemLabelBlock>Culture</ItemLabelBlock>
					<ItemValueBlock>First</ItemValueBlock>
				</ItemBlock>
			</ListBlock>
		)
	}
}