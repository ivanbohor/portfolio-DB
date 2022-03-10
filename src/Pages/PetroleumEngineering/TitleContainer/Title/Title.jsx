import React from "react";
import styled from "styled-components";

function Title() {
	return (
		<TitleContainer>
			<TitleStyled>Petroleum</TitleStyled>
			<SubtitleStyled>Engineering_</SubtitleStyled>
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
	font-size: 65px;
	color: var(--orangeStrong);
	@media screen and (max-width: 1080px) {
		font-size: 50px;
	}
	@media screen and (max-width: 500px) {
		font-size: 35px;
	}
`;

const SubtitleStyled = styled.div`
	font-weight: 400;
	font-family: var(--robotoFont);
	font-size: 35px;
	color: var(--orangeStrong);
	@media screen and (max-width: 500px) {
		font-size: 20px;
	}
`;
