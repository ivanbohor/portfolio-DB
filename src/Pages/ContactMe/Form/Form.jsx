import React from "react";
import styled, { keyframes } from "styled-components";

import FormItems from "./FormItems/FormItems";

function Form({ toggleSent, toggleShow }) {
	return (
		<FormContact>
			<FormItems toggleSent={toggleSent} toggleShow={toggleShow} />
		</FormContact>
	);
}

export default Form;

const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const FormContact = styled.form`
	width: 600px;
	height: 340px;
	padding: 15px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	opacity: 0;
	animation: ${Fade} 1s forwards;
	padding-bottom: 10px;
	@media screen and (max-width: 640px) {
		max-width: 600px;
		padding: 15px 15px;
	}
`;
