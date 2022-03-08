import React from "react";
import styled from "styled-components";

import imgAsset from "../../../Assets/contactImage.svg";

function Image() {
	return <ImgContact src={imgAsset} />;
}

export default Image;

const ImgContact = styled.img`
	width: 350px;
	height: 350px;
`;
