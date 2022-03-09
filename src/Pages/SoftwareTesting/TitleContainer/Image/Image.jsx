import React from "react";
import styled from "styled-components";
import imgTesting from "../../../../Assets/softwareTestingImage.svg";

function Image() {
	return <Img src={imgTesting} />;
}

export default Image;

const Img = styled.img`
	width: 350px;
	height: 350px;
`;
