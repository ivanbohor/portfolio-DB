import React from "react";
import styled, { keyframes } from "styled-components";
import Icons from "./Icons/Icons";
import Line from "./Line/Line";

function IconsMedia() {
	return (
		<IconsContainer>
			<Line />
			<Icons />
		</IconsContainer>
	);
}

export default IconsMedia;

const Fade = keyframes`
	
    0% {opacity: 0;}
    90% {opacity: 0;}
    100% {opacity: 1;}
`;

const IconsContainer = styled.div`
	width: 70px;
	height: 700px;
	position: absolute;
	left: 75px;
	top: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	animation: ${Fade} 4s forwards;
	z-index: 900;
`;
