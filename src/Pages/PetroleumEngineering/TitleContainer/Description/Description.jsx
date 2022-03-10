import React from "react";
import styled from "styled-components";

function Description() {
	return (
		<DescriptionStyled>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
			vulputate libero et velit interdum, ac aliquet odio mattis.Lorem
			ipsum dolor sit ame
		</DescriptionStyled>
	);
}

export default Description;

const DescriptionStyled = styled.div`
	max-width: 680px;
	height: auto;
	color: white;
	font-family: var(--robotoFont);
	font-weight: 400;
	font-size: 18px;
	text-align: start;
	@media screen and (max-width: 1080px) {
		display: none;
	}
`;
