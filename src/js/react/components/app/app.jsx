import React, { Component } from "react";
import AppHeader from "../header/header.jsx";
import RandomCharacter from "../randomCharacter/randomCharacter.jsx";
import DetalesCharacter from "../detalesCharacter/detalesCharacter.jsx";
import ItemList from "../itemList/itemList.jsx";
import GotService from "../../services/gotService.jsx";
// import "./app.scss";
import styled from "styled-components";

//<СТИЛИ>=================================
const AppBlock = styled.div`
	font-size: 20px;
	font-family: Arial;
	min-height: 100vh;
`;

const MainBlock = styled.main`
`;

const SectionBlock = styled.section`
margin: 0px 0px 30px 0px;
`;

const PageBoxBlock = styled.div`
`;

const BoxContainerBlock = styled.div`
	display: flex;
	column-gap: 30px;
	max-width: 80rem;
   box-sizing: content-box;
   margin: 0 auto;
   padding: 0 1.25rem;
	& ${SectionBlock} {
	flex: 0 1 50%;
	}
`;

const MainBgBlock = styled.div`
	img {
		position: absolute;
		width: 100%;
		min-height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
		z-index: 1;
	}
`;

const ListBlock = styled.ul`
	position: relative;
	z-index: 2;
	flex: 0 1 33.333%;
	padding: 30px;
	background-color: #fff;
	border-radius: 5px;
	transition: box-shadow 0.3s ease 0s;
	& > :not(:last-child) {
		position: relative;
		&::after {
			content: "";
			width: 100%;
			height: 1%;
			background-color: #99999929;
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}
	@media (any-hover: hover) {
		&:hover {
			box-shadow: 0 0 15px rgba(255, 255, 255, 1);
		}
	}
`;

const ItemBlock = styled.li`
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
`;

const ItemLabelBlock = styled.span`
	font-weight: 700;
`;

const ItemValueBlock = styled.span`
`;
//</СТИЛИ>=================================

const got = new GotService();
// got.getAllCharacters().then(res => {
// 	return res.forEach(element => {
// 		if (element.name) {
// 			console.log(element.name);
// 		}
// 	});
// });

// got.getAllHouses().then(res => {
// 	return res.forEach(element => {
// 		if (element.name) {
// 			console.log(element.name);
// 		}
// 	});
// });

// got.getCharacter(111).then(res => console.log(res));
// got.getAllbooks().then(res => console.log(res));
// got.getBook(3).then(res => console.log(res));
// got.getHouse(3).then(res => console.log(res));
// got.getAllHouses().then(res => console.log(res));



export default class App extends Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<AppBlock>
				<AppHeader />
				<MainBlock>
					<SectionBlock>
						<BoxContainerBlock>
							<RandomCharacter />
						</BoxContainerBlock>
					</SectionBlock>
					<PageBoxBlock>
						<BoxContainerBlock>
							<SectionBlock>
								<ItemList />
							</SectionBlock>
							<SectionBlock>
								<DetalesCharacter />
							</SectionBlock>
						</BoxContainerBlock>
					</PageBoxBlock>
				</MainBlock>
				<MainBgBlock>
					<img src="img/got.jpeg" alt="got.jpeg" />
				</MainBgBlock>
			</AppBlock>
		);
	}
};

export { ListBlock, ItemBlock, ItemLabelBlock, ItemValueBlock };