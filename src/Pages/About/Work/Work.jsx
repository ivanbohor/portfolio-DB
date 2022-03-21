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
width: auto;

`
const ContainerWork= styled.div`
display :flex;
flex-direction: row-reverse;
width:100%;
place-self: self-start;
@media screen and (max-width: 1080px) {
	padding-top: 1rem;
}
@media screen and (max-width: 500px) {
	gap:2rem;
	margin-top:2rem;
	padding-bottom:2rem;


`

export default Work;
