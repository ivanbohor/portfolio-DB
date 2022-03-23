import React from "react";
import styled, { keyframes } from "styled-components";

import imgAsset from "../../../Assets/contactImage.svg";
import imgLogo from "../../../Assets/logoDaniel.svg";

function Image() {
	return (
		<ImageContainer>
			<ImgContact src={imgAsset} />
			<Logo src={imgLogo} />
		</ImageContainer>
	);
}

export default Image;
const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const ImgContact = styled.img`
	width: 100%;
`;
const ImageContainer = styled.div`
	width: 70%;
	opacity: 0;
	animation: ${Fade} 3s forwards;
	position: relative;
`;

const Logo = styled.img`
	width: 50%;
	opacity: 0;
	animation: ${Fade} 3s forwards;
	position: absolute;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin-left: auto;
	margin-right: auto;
	margin-top: auto;
	margin-bottom: auto;
`;
