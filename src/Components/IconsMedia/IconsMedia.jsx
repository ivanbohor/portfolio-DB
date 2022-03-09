import React from "react";
import styled from "styled-components";
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

const IconsContainer = styled.div`
	width: 70px;
	height: 900px;
	position: absolute;
	left: 75px;
	top: 50px;
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
`;
