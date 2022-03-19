import React from "react";
import Title from "./Title/Title";
import Image from "./Image/Image";
import Description from "./Description/Description";
import styled from "styled-components";

function Me() {
	return (
		<>
		<ContainerMe> 
			<ContainerText> 
				<Title />
				<Description />
			</ContainerText>
			<Image />
		</ContainerMe>
		</>
	);
}

const ContainerText= styled.div`
margin-right:2.5rem;
`
const ContainerMe = styled.div`
display :flex;
gap:21rem;

`
export default Me;
