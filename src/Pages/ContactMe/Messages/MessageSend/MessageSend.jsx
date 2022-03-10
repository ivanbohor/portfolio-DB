import React from "react";
import styled, { keyframes } from "styled-components";

function MessageSend() {
	return <SendContainer>Message sent successfully</SendContainer>;
}

export default MessageSend;
const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const SendContainer = styled.form`
	width: 600px;
	height: 340px;
	margin: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	opacity: 0;
	animation: ${Fade} 1s forwards;
	background-color: var(--orangeLigthBackgroundColor);
	border-radius: 10px;
	font-size: 25px;
	color: var(--orangeStrong);
	letter-spacing: 0.5px;
	font-family: var(--sanchezFont);
	border-bottom: 2px solid var(--orangeStrong);
	padding-bottom: 10px;
	@media screen and (max-width: 640px) {
		max-width: 600px;
		font-size: 20px;
	}
`;
