import React from "react";
import styled from "styled-components";
import imageX from "../../../Assets/x.svg";

function ButtonCloseX({ toggleShow }) {
	return (
		<ButtonContainer onClick={toggleShow} src={imageX}></ButtonContainer>
	);
}

export default ButtonCloseX;

const ButtonContainer = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	width: auto;
	height: auto;
	color: black;
	z-index: 1001;
	cursor: pointer;
`;
