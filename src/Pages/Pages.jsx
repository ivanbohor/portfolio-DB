import React, { useContext } from "react";
import styled from "styled-components";
import About from "./About/About";
import ContactMe from "./ContactMe/ContactMe";
import Home from "./Home/Home";
import PetroleumEngineering from "./PetroleumEngineering/PetroleumEngineering";
import SoftwareTesting from "./SoftwareTesting/SoftwareTesting";
import { SectionOnScreenContext } from "../Context/sectionOnScreen";

function Pages() {
	const { home, about, software, petroleum, contact } = useContext(
		SectionOnScreenContext
	);

	return (
		<PagesContainer>
			{home && <Home />}
			{about && <About />}
			{software && <SoftwareTesting />}
			{petroleum && <PetroleumEngineering />}
			{contact && <ContactMe />}
		</PagesContainer>
	);
}

export default Pages;

const PagesContainer = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
