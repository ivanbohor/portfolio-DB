import React, { useContext } from "react";
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
		<>
			{home && <Home />}
			{about && <About />}
			{software && <SoftwareTesting />}
			{petroleum && <PetroleumEngineering />}
			{contact && <ContactMe />}
		</>
	);
}

export default Pages;
