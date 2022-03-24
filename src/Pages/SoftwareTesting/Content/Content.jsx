import React, { useState } from "react";
import styled from "styled-components";
import ExperienceContent from "./ExperienceContent/ExperienceContent";
import ProyectsContent from "./ProyectsContent/ProyectsContent";

function Content() {
	const [experience, setExperience] = useState(true);
	const [proyects, setProyects] = useState(false);

	const handleClickExperience = () => {
		setExperience(true);
		setProyects(false);
	};

	const handleClickProyects = () => {
		setProyects(true);
		setExperience(false);
	};

	return (
		<ContentContainer>
			<ButtonsContainer>
				<Button
					color={`${experience}`}
					border={`${experience}`}
					onClick={handleClickExperience}
				>
					Experience
				</Button>
				<Button
					color={`${proyects}`}
					border={`${proyects}`}
					onClick={handleClickProyects}
				>
					Projects
				</Button>
			</ButtonsContainer>
			{experience ? <ExperienceContent /> : <ProyectsContent />}
		</ContentContainer>
	);
}

export default Content;

const ContentContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const ButtonsContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	width: 50%;
	font-family: var(--robotoFont);
	font-weight: 500;
	font-size: 30px;
	cursor: pointer;
	text-align: center;
	color: ${({ color }) =>
		color === "true" ? "white" : "rgb(255, 255, 255, 0.6)"};
	background-color: var(--orangeLigthBackgroundColor);
	border: none;
	padding: 12px 0px;
	border-bottom: ${({ border }) =>
		border === "true" ? "2px solid var(--orangeStrong)" : "none"};

	@media screen and (max-width: 1080px) {
		font-size: 25px;
	}
	@media screen and (max-width: 500px) {
		font-size: 20px;
	}
`;
