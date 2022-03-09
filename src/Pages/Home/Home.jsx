import React, { useContext } from "react";

import styled, { keyframes } from "styled-components";
import handleWheel from "../../Helpers/mouseWheelPages";
import { SectionOnScreenContext } from "../../Context/sectionOnScreen";

function Home() {
	const { toggleContact, toggleAbout } = useContext(SectionOnScreenContext);

	return (
		<HomeContainer
			onWheel={(e) => handleWheel(e, toggleAbout, toggleContact)}
		></HomeContainer>
	);
}

export default Home;

const Fade = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;

const HomeContainer = styled.div`
	width: 100%;
	min-height: 94.5vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 100px;
	opacity: 0;
	animation: ${Fade} 1.5s forwards;
`;
