import React from "react";

import Title from "./Title/Title";
import SocialMedia from "./SocialMedia/SocialMedia";
import Content from "./Content/Content";
import styled, { keyframes } from "styled-components";

function Home() {
	return (
		<HomeContainer>
			<Title />
			<SocialMedia />
			<Content />
		</HomeContainer>
	);
}

export default Home;

const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const HomeContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	opacity: 0;
	animation: ${Fade} 1.5s forwards;
	background-color: var(--orangeLigthBackgroundColor);
`;
