import React from "react";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Description from "./Description/Description";
import Form from "./Form/Form";
import styled, { keyframes } from "styled-components";

function ContactMe() {
	return (
		<ContainerContact id='contact'>
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
	width: 85%;
	height: 90%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	gap: 100px;
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
