import React from "react";
import styled from "styled-components";
import imgTesting from "../../../../Assets/softwareTestingImage.svg";

function Image() {
	return <Img src={imgTesting} />;
}

export default Image;

const Img = styled.img`
	width: 300px;
	height: 300px;
	@media screen and (max-width: 1080px) {
		width: 200px;
		height: 200px;
	}
	@media screen and (max-width: 500px) {
		width: 120px;
		height: 120px;
	}
`;
