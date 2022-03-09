import React from "react";
import styled from "styled-components";

function Title() {
	return (
		<TitleContainer>
			<TitleStyled>Software</TitleStyled>
			<SubtitleStyled>Testing_</SubtitleStyled>
		</TitleContainer>
	);
}

export default Title;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const TitleStyled = styled.div`
	font-weight: 600;
	font-family: var(--robotoFont);
	font-size: 70px;
	color: var(--orangeStrong);
`;

const SubtitleStyled = styled.div`
	font-weight: 400;
	font-family: var(--robotoFont);
	font-size: 40px;
	color: var(--orangeStrong);
`;
