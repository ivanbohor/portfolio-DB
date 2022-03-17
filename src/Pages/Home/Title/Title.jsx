import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect"

function Title() {
	return (
		<ContainerTitle> 
		 <TitleStyled> 
			<Typewriter loop="true"	 onInit ={(typewriter ) => {
				typewriter.typeString("Hi,<br/> I'm Daniel_")
				.pauseFor(1000)
				.start();
				}}>
			</Typewriter>
		 </TitleStyled>
		</ContainerTitle>
	)
}
const ContainerTitle =styled.div `
width:30.5rem;
height:8.81rem;
@media screen and (max-width: 500px) {
	width: 278px;
	height: 85px;
	margin-right:3rem;	
}`
const TitleStyled =styled.h1`
font-weight: 600;
font-family: Trispace;
font-style: normal;
font-size: 4.06rem;
line-height: 4.5rem;
color : rgba(128,128,128,0.8);
@media screen and (max-width: 1080px) {
	font-size: 55px;
	line-height: 62px;	
}
@media screen and (max-width: 500px) {
	font-size: 2.25rem;
	line-height: 2.56rem;
}`
export default Title;
