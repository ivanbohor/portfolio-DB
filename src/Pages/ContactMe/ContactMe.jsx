import React, { useContext } from "react";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Description from "./Description/Description";
import handleWheel from "../../Helpers/mouseWheelPages";
import Form from "./Form/Form";
import { SectionOnScreenContext } from "../../Context/sectionOnScreen";
import styled, { keyframes } from "styled-components";

function ContactMe() {
	const { toggleHome, togglePetroleum } = useContext(SectionOnScreenContext);

	return (
		<ContainerContact
			id='contact'
			onWheel={(e) => handleWheel(e, toggleHome, togglePetroleum)}
		>
			<TopContainer>
				<Image />
				<Title />
				<Description />
			</TopContainer>
			<Form />
		</ContainerContact>
	);
}

export default ContactMe;

const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const ContainerContact = styled.div`
	width: 100%;
	min-height: 94.5vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	gap: 60px;
	opacity: 0;
	animation: ${Fade} 1.5s forwards;
`;

const TopContainer = styled.div`
	max-width: 550px;
	height: auto;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	align-self: center;
`;
