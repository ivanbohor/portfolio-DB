import React from "react";
import styled from "styled-components";
import imgTesting from "../../../../Assets/petroleumImage.svg";

function Image() {
	return <Img src={imgTesting} />;
}

export default Image;

const Img = styled.img`
	width: 280px;
	height: 280px;
`;
