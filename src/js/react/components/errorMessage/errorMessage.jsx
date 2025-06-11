import React from "react";
// import "./spinner.scss"
import styled from "styled-components";
import img from "./Daineris-Else.jpg";

//<СТИЛИ>=================================
const ErrorMessageBlock = styled.span`
	color: red;
	position: relative;
	z-index: 3;
`;
const ImageBlock = styled.div`
	position: relative;
	padding-bottom: 10%;
	overflow: hidden;
img {
	position: absolut;
	width: 100%;
	hight: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
}
`;
//</СТИЛИ>=================================

const ErrorMessage = () => {
	return (
		<>
			<ImageBlock><img src={img} alt="error"></img></ImageBlock>
			<ErrorMessageBlock>Something goes wrong</ErrorMessageBlock>
		</>
	)
}
export default ErrorMessage;