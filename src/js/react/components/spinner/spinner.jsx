import React from "react";
// import "./spinner.scss"
import styled from "styled-components";

//<СТИЛИ>=================================
const SpinnerBlock = styled.div`
	width: 64px;
	height: 59px;
	background: url("../../../../img/icons/spinner.gif") center no-repeat;
	margin: 0 auto;
	padding: 100px 0;
`;

//</СТИЛИ>=================================

const Spinner = () => {
	return (
		<SpinnerBlock>
		</SpinnerBlock>
	)
}
export default Spinner;