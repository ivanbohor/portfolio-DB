import React from "react";
import styled from "styled-components";


function Description() {
	return (
	<ContainerDescription>
		<DescriptionStyled>
		There is no such thing as big problems, they are just the opportunity to innovate.

		</DescriptionStyled>
	</ContainerDescription>
	)
}
const  DescriptionStyled = styled.div `
margin-top:4.2rem;
font-family: Roboto;
font-style: normal;
font-weight: 400;
font-size: 1.5rem;
line-height: 1.75rem;
color : rgba(128,128,128,1);

@media screen and (max-width: 1080px) {
	font-size: 18px;
line-height: 21px;
margin-top: 1.2rem;
		
}
@media screen and (max-width: 500px) {
	font-size: 13px;
	line-height: 15px;
	margin-top:1.4rem;
	margin-left: 1.1rem;


`
const ContainerDescription = styled.div `
width: 31.37rem;
height: 3.18rem;

@media screen and (max-width: 1080px) {
	width: 547px;
	height: 51px;
		
}
@media screen and (max-width: 500px) {
	width: 287px;
	height: 51px;
`
export default Description;
