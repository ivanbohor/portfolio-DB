import React from "react";
import Title from "./Title/Title";
import Image from "./Image/Image";
import Description from "./Description/Description";
import styled from "styled-components";

function Work() {
	return (
		<>
		<ContainerWork> 
			<ContainerText>
			<Title />
			<Description />
			</ContainerText>
			<Image />
		</ContainerWork>
		</>
	);
}
const  ContainerText=styled.div`
width: 245px;
height: 231px;

`
const ContainerWork= styled.div`
display :flex;
flex-direction: row-reverse;
gap:8rem;

`

export default Work;
