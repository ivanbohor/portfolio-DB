import React from "react";
import styled from "styled-components";
import Description from "./Description/Description";
import DescriptionResponsive from "./Description/DescriptionResponsive";
import Image from "./Image/Image";
import Title from "./Title/Title";

function TitleContainer() {
	return (
		<ContainerStyled>
			<Image />
			<SubContainer>
				<Title />
				<Description />
			</SubContainer>
			<DescriptionResponsive />
		</ContainerStyled>
	);
}

export default TitleContainer;

const ContainerStyled = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 60px;

	@media screen and (max-width: 1080px) {
		justify-content: space-evenly;
	}
`;

const SubContainer = styled.div`
	width: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 25px;
	@media screen and (max-width: 500px) {
		gap: 5px;
	}
`;
