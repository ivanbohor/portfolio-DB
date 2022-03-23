import React, { useContext } from "react";

import styled, { keyframes } from "styled-components";
import handleWheel from "../../Helpers/mouseWheelPages";
import { SectionOnScreenContext } from "../../Context/sectionOnScreen";
import Title from "./Title/Title";
import Description from "./Content/Description/Description";
import Image from "./Content/Image/Image";
import KnowMe from "./Content/KnowMe/KnowMe";

function Home() {
	const { toggleContact, toggleAbout } = useContext(SectionOnScreenContext);

	return (
		<HomeContainer
			onWheel={(e) => handleWheel(e, toggleAbout, toggleContact)}>
				<ContainerHome> 
				<ContentContainer>
					<TextContent> 
						<Title />	
						<Description/>
					</TextContent>
				<Image/>	
				</ContentContainer>
				</ContainerHome>
				<KnowMe/>
				
		</HomeContainer>
	);
}

export default Home;
const ContainerHome = styled.div`
max-width: 1045px;

`
const ContentContainer =styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
column-gap: 6rem;
@media screen and (max-width: 1080px) {
	font-size: 25px;
			flex-direction: column;

}
@media screen and (max-width: 500px) {
 flex-wrap: inherit;
 justify-content: center;
 flex-direction: column;

}
`
const Fade = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;
const HomeContainer = styled.div`
	width: 100%;
	min-height: 68vh ;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	opacity: 0;
	animation: ${Fade} 1.5s forwards;

	@media screen and (max-width: 1080px) {
		font-size: 25px;
		
	}
	@media screen and (max-width: 500px) {
		min-height: 60vh;
	}
`;

const TextContent = styled.div `
display flex: flex;
margin-top: 2rem;
@media screen and (max-width: 1080px) {
	
}
@media screen and (min-width: 500px) {
}
`