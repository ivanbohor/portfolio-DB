import React from "react";
import styled from "styled-components";
import imageLinkedin from "../../../Assets/linkedin.svg";
import imageGithub from "../../../Assets/github.svg";
import imageEmail from "../../../Assets/mail.svg";

function Icons() {
	return (
		<IconsContainer>
			<Imgs src={imageGithub} />
			<Imgs src={imageLinkedin} />
			<Imgs src={imageEmail} />
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
