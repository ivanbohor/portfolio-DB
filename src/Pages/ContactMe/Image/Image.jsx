import React from "react";
import styled, { keyframes } from "styled-components";

import imgAsset from "../../../Assets/contactImage.svg";

function Image() {
	return <ImgContact src={imgAsset} />;
}

export default Image;
const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const ImgContact = styled.img`
	width: 70%;
	opacity: 0;
	animation: ${Fade} 3s forwards;
`;
