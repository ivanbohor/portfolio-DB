import React from "react";
import styled, { keyframes } from "styled-components";

function Title() {
	return <TitleContact>Get in touch</TitleContact>;
}

export default Title;

const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const TitleContact = styled.div`
	width: 100%;
	height: auto;
	color: var(--greyLight);
	font-size: 50px;
	font-weight: 600;
	line-height: 40px;
	font-family: var(--trispaceFont);
	text-align: center;
	opacity: 0;
	animation: ${Fade} 1s forwards;
	@media screen and (max-width: 450px) {
		font-size: 40px;
	}
`;
