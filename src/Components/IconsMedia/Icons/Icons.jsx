import React, { useContext } from "react";
import styled from "styled-components";
import imageLinkedin from "../../../Assets/linkedin.svg";
import imageGithub from "../../../Assets/github.svg";
import imageEmail from "../../../Assets/mail.svg";
import openInNewTab from "../../../Helpers/openNewTab";
import { SectionOnScreenContext } from "../../../Context/sectionOnScreen";

function Icons() {
	const { toggleContact } = useContext(SectionOnScreenContext);
	return (
		<IconsContainer>
			<Imgs
				src={imageGithub}
				onClick={() => openInNewTab("https://github.com/danielbarr3ra")}
			/>
			<Imgs
				src={imageLinkedin}
				onClick={() => openInNewTab("https://linkedin.com")}
			/>
			<Imgs src={imageEmail} onClick={toggleContact} />
		</IconsContainer>
	);
}

export default Icons;

const IconsContainer = styled.div`
	width: 100%;
	height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	z-index: 999;
`;

const Imgs = styled.img`
	width: 50px;
	height: 50px;
	cursor: pointer;
	transition: all 0.2s linear;
	:hover {
		transition: all 0.2s linear;
		padding-bottom: 5px;
		transform: scale(1.2);
	}
`;
