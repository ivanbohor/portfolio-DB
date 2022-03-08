import React from "react";
import styled from "styled-components";

function Title() {
	return <TitleContact>Get in touch</TitleContact>;
}

export default Title;

const TitleContact = styled.div`
	width: 100%;
	height: auto;
	color: var(--greyLight);
	font-size: calc(30px + 2vw);
	font-weight: 600;
	line-height: 40px;
	font-family: var(--trispaceFont);
	text-align: center;
`;
