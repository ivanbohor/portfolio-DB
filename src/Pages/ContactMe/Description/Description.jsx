import React from "react";
import styled from "styled-components";

function Description() {
	return (
		<DescriptionContact>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
			vulputate libero et velit interdum, ac aliquet odio mattis.
		</DescriptionContact>
	);
}

export default Description;

const DescriptionContact = styled.div`
	width: 100%;
	height: 50px;
	color: var(--grey);
	font-weight: 400;
	font-size: calc(5px + 1.1vw);
	font-family: var(--robotoFont);
	text-align: center;
`;
