import React from "react";
import styled from "styled-components";
import menu from "../../../Assets/menu.svg";

function ButtonMenu({ toggleShow }) {
	return <ButtonContainer src={menu} onClick={toggleShow} />;
}

export default ButtonMenu;

const ButtonContainer = styled.img`
	width: auto;
	height: auto;
	color: black;
	z-index: 900;
	cursor: pointer;
`;
