import React from "react";
import styled from "styled-components";

function Description() {
	return (
		<DescriptionStyled>
			I have been working as a QA engineer since february 2021.
		</DescriptionStyled>
	);
}

export default Description;

const DescriptionStyled = styled.div`
	display: none;
	max-width: 680px;
	margin: 0 auto;
	padding: 0px 2px;
	height: auto;
	color: white;
	font-family: var(--robotoFont);
	font-weight: 400;
	font-size: 18px;
	text-align: center;
	@media screen and (max-width: 1080px) {
		display: flex;
	}
	@media screen and (max-width: 500px) {
		font-size: 14px;
	}
`;
