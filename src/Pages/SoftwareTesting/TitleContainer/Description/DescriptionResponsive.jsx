import React from "react";
import styled from "styled-components";

function Description() {
	return (
		<DescriptionStyled>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
			vulputate libero et velit interdum, ac aliquet odio mattis.Lorem
			ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
			libero et velit interdum, ac aliquet odio mattis.
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