import React from "react";
import styled, { keyframes } from "styled-components";

function MessageError({ toggleShow }) {
	return (
		<ErrorContainer>
			<ErrorText>Please fill the form correctly</ErrorText>
			<TryAgain onClick={toggleShow}>Try Again</TryAgain>
		</ErrorContainer>
	);
}

export default MessageError;

const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const ErrorContainer = styled.form`
	width: 600px;
	height: 320px;
	margin: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;
	opacity: 0;
	animation: ${Fade} 1s forwards;
	background-color: var(--orangeLigthBackgroundColor);
	border-radius: 10px;
	border-bottom: 2px solid var(--orangeStrong);

	@media screen and (max-width: 640px) {
		max-width: 600px;
	}
`;

const ErrorText = styled.div`
	width: 100%;
	font-size: 25px;
	color: var(--orangeStrong);
	letter-spacing: 0.5px;
	font-family: var(--sanchezFont);
	text-align: center;
	@media screen and (max-width: 640px) {
		font-size: 20px;
	}
`;

const TryAgain = styled.div`
	width: auto;
	height: auto;
	border: none;
	font-size: 20px;
	letter-spacing: 0.5px;
	font-family: var(--sanchezFont);
	color: white;
	background-color: var(--orangeStrong);
	cursor: pointer;
	padding: 10px;
	border-radius: 5px;
	transition: all 0.1s linear;
	:hover {
		transition: all 0.1s linear;
		transform: scale(1.03);
	}
	@media screen and (max-width: 640px) {
		font-size: 15px;
	}
`;
