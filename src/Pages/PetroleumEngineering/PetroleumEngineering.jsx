import React from "react";
import TitleContainer from "./TitleContainer/TitleContainer";
import Description from "./Description/Description";
import Content from "./Content/Content";
import styled, { keyframes } from "styled-components";

function PetroleumEngineering() {
	return (
		<PetroleumContainer>
			<TitleContainer />
			<Description />
			<Content />
		</PetroleumContainer>
	);
}

export default PetroleumEngineering;

const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const PetroleumContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	opacity: 0;
	animation: ${Fade} 1.5s forwards;
	background-color: var(--orangeStrongBackgroundColor);
`;
