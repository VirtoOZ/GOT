import React, { Component } from "react";
import "./itemList.scss"
// import styled from "styled-components";
import { ListBlock, ItemBlock, ItemLabelBlock, ItemValueBlock } from "../app/app.jsx";


//<СТИЛИ>=================================

// const ItemBlock = styled.li`
// 	padding: 10px 0;
// 	display: flex;
// 	justify-content: space-between;
// `;

// const ItemValueBlock = styled.span`
// `;
//</СТИЛИ>=================================

export default class ItemList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListBlock>
				<ItemBlock>
					<ItemValueBlock>John Snow</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemValueBlock>Brandon Stark</ItemValueBlock>
				</ItemBlock>
				<ItemBlock>
					<ItemValueBlock>Geremy</ItemValueBlock>
				</ItemBlock>
			</ListBlock>
		)
	}
}