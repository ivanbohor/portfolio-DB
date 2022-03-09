import React, { useContext } from "react";
import TitleContainer from "./TitleContainer/TitleContainer";
import Content from "./Content/Content";
import styled, { keyframes } from "styled-components";
import { SectionOnScreenContext } from "../../Context/sectionOnScreen";
import handleWheel from "../../Helpers/mouseWheelPages";

function SoftwareTesting() {
	const { togglePetroleum, toggleAbout } = useContext(SectionOnScreenContext);
	return (
		<SoftwareContainer
			onWheel={(e) => handleWheel(e, togglePetroleum, toggleAbout)}
		>
			<TitleContainer />
			<Content />
		</SoftwareContainer>
	);
}

export default SoftwareTesting;

const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const SoftwareContainer = styled.div`
	width: 100%;
	min-height: 94.5vh;
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 15px;
	opacity: 0;
	animation: ${Fade} 1.5s forwards;
	background-color: var(--orangeLigthBackgroundColor);
`;
