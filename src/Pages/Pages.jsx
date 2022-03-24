import React, { useContext } from "react";
import styled from "styled-components";
import About from "./About/About";
import ContactMe from "./ContactMe/ContactMe";
import Home from "./Home/Home";
import PetroleumEngineering from "./PetroleumEngineering/PetroleumEngineering";
import SoftwareTesting from "./SoftwareTesting/SoftwareTesting";
import { SectionOnScreenContext } from "../Context/sectionOnScreen";
import IconsMedia from "../Components/IconsMedia/IconsMedia";
import ResumeBook from "../Components/ResumeBook/ResumeBook";

function Pages() {
	const { home, about, software, petroleum, resume, contact } = useContext(
		SectionOnScreenContext
	);

	return (
		<>
			<PagesContainer>
				<IconsMedia />
				{home && <Home />}
				{about && <About />}
				{software && <SoftwareTesting />}
				{petroleum && <PetroleumEngineering />}
				{contact && <ContactMe />}
				{resume && <ResumeBook />}
			</PagesContainer>
			<PagesContainerMobile>
				<Home />
				<About />
				<SoftwareTesting />
				<PetroleumEngineering />
				<ResumeBook />
				<ContactMe />
			</PagesContainerMobile>
		</>
	);
}

export default Pages;

const PagesContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 1150px) {
		display: none;
	}
`;

const PagesContainerMobile = styled.div`
	width: 100%;
	min-height: 100%;
	display: none;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 1150px) {
		display: flex;
	}
`;
