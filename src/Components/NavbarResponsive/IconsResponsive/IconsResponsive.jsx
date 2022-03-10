import React, { useContext } from "react";
import styled from "styled-components";
import imageLinkedin from "../../../Assets/linkedin.svg";
import imageGithub from "../../../Assets/github.svg";
import imageEmail from "../../../Assets/mail.svg";
import imageLinkedinWhite from "../../../Assets/linkedinWhite.svg";
import imageGithubWhite from "../../../Assets/githubWhite.svg";
import imageEmailWhite from "../../../Assets/mailWhite.svg";
import openInNewTab from "../../../Helpers/openNewTab";
import { SectionOnScreenContext } from "../../../Context/sectionOnScreen";

function IconsResponsive({ toggleShow }) {
	const { toggleContact, petroleum } = useContext(SectionOnScreenContext);

	return (
		<IconsContainer>
			{petroleum ? (
				<>
					<Imgs
						src={imageGithubWhite}
						onClick={() => {
							openInNewTab("https://github.com/danielbarr3ra");
							toggleShow();
						}}
					/>
					<Imgs
						src={imageLinkedinWhite}
						onClick={() => {
							openInNewTab("https://linkedin.com");
							toggleShow();
						}}
					/>
					<Imgs src={imageEmailWhite} onClick={toggleContact} />
				</>
			) : (
				<>
					<Imgs
						src={imageGithub}
						onClick={() => {
							openInNewTab("https://github.com/danielbarr3ra");
							toggleShow();
						}}
					/>
					<Imgs
						src={imageLinkedin}
						onClick={() => {
							openInNewTab("https://linkedin.com");
							toggleShow();
						}}
					/>
					<Imgs src={imageEmail} onClick={toggleContact} />
				</>
			)}
		</IconsContainer>
	);
}

export default IconsResponsive;

const IconsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 30px;
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
