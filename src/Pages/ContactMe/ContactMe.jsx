import React from "react";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Description from "./Description/Description";
import Form from "./Form/Form";
import styled from "styled-components";

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

const ContainerContact = styled.div`
	width: 90%;
	min-height: 100vh;
	padding: 15px;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	gap: 100px;
	background-color: green;
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
