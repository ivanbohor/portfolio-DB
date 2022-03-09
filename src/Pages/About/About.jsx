import React, { useContext } from "react";
import Me from "./Me/Me";
import Work from "./Work/Work";
import Skills from "./Skills/Skills";
import styled, { keyframes } from "styled-components";
import handleWheel from "../../Helpers/mouseWheelPages";
import { SectionOnScreenContext } from "../../Context/sectionOnScreen";

function About() {
	const { toggleHome, toggleSoftware } = useContext(SectionOnScreenContext);

	return (
		<AboutContainer
			onWheel={(e) => handleWheel(e, toggleSoftware, toggleHome)}
		>
			<Me />
			<Work />
			<Skills />
		</AboutContainer>
	);
}

export default About;

const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const AboutContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	opacity: 0;
	animation: ${Fade} 1.5s forwards;
`;
