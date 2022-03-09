import React from "react";
import styled from "styled-components";
import Description from "./Description/Description";
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
		</ContainerStyled>
	);
}

export default TitleContainer;

const ContainerStyled = styled.div`
	width: auto;
	height: 250px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 40px;
`;

const SubContainer = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 40px;
`;
