import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import TitleContainer from "./TitleContainer/TitleContainer";
import Content from "./Content/Content";
import { SectionOnScreenContext } from "../../Context/sectionOnScreen";
import handleWheel from "../../Helpers/mouseWheelPages";

function PetroleumEngineering() {
	const { toggleResume, toggleSoftware } = useContext(SectionOnScreenContext);

	return (
		<PetroleumContainer
			onWheel={(e) => handleWheel(e, toggleResume, toggleSoftware)}
			id='petroleum'
		>
			<ContentContainer>
				<TitleContainer />
				<Content />
			</ContentContainer>
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
	min-height: calc(100vh - var(--NavbarHeight));
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 15px;
	opacity: 0;
	animation: ${Fade} 1.5s forwards;
	background-color: #ffb151;
`;

const ContentContainer = styled.div`
	max-width: 1045px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;
`;
