import React, { useContext, useState } from "react";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Description from "./Description/Description";
import handleWheel from "../../Helpers/mouseWheelPages";
import Form from "./Form/Form";
import MessageSend from "./Messages/MessageSend/MessageSend";
import MessageError from "./Messages/MessageError/MessageError";
import { SectionOnScreenContext } from "../../Context/sectionOnScreen";
import styled, { keyframes } from "styled-components";

function ContactMe() {
	const { toggleHome, togglePetroleum } = useContext(SectionOnScreenContext);
	const [sent, setSent] = useState(false);
	const [showForm, setShowForm] = useState(true);

	const toggleSent = () => {
		setSent(!sent);
	};

	const toggleShow = () => {
		setShowForm(!showForm);
	};

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
			{showForm ? (
				<Form toggleSent={toggleSent} toggleShow={toggleShow} />
			) : sent ? (
				<MessageSend />
			) : (
				<MessageError toggleShow={toggleShow} />
			)}
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
	min-height: calc(100vh - var(--NavbarHeight));
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
