import React from "react";
import Me from "./Me/Me";
import Work from "./Work/Work";
import Skills from "./Skills/Skills";
import styled, { keyframes } from "styled-components";

function About() {
	return (
		<AboutContainer>
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
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	opacity: 0;
	animation: ${Fade} 1.5s forwards;
`;
