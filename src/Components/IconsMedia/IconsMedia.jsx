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
	width: 150px;
	height: 100%;
	position: fixed;
	left: 0px;
	bottom: 0px;
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
`;
