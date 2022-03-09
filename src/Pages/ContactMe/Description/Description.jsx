import React from "react";
import styled, { keyframes } from "styled-components";

function Description() {
	return (
		<DescriptionContact>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
			vulputate libero et velit interdum, ac aliquet odio mattis.
		</DescriptionContact>
	);
}

export default Description;

const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const DescriptionContact = styled.div`
	width: 100%;
	height: 50px;
	color: var(--grey);
	font-weight: 400;
	font-size: calc(3px + 1vw);
	font-family: var(--robotoFont);
	text-align: center;
	opacity: 0;
	animation: ${Fade} 3s forwards;
`;
