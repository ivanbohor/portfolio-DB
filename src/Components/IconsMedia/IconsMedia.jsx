import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { SectionOnScreenContext } from "../../Context/sectionOnScreen";
import Icons from "./Icons/Icons";
import Line from "./Line/Line";

function IconsMedia() {
	const { home } = useContext(SectionOnScreenContext);

	return (
		<IconsContainer show={home}>
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
	left: 72px;
	top: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	animation: ${Fade} 4s forwards;
	z-index: 900;
	@media screen and (max-width: 1400px) {
		display: ${({ show }) => (show ? "flex" : "none")};
	}

	@media screen and (max-width: 1080px) {
		width: 39.81px;
		height: 613px;
		top: 245px;
		left: 58px;
	}
	@media screen and (max-width: 500px) {
		left: 0.6rem;
		top: 222px;
	}
`;
