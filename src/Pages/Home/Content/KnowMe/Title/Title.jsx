import React from "react";
import styled from "styled-components";

function Title() {
	return <TitleStyled>Get to know me</TitleStyled>;
}
const TitleStyled = styled.div `
font-family:Roboto;
font-style:normal;
font-weight:400;
font-size:2.19rem;
line-height: 2.57rem;
color : rgba(128,128,128,1);
margin-top: 2.5rem;
@media screen and (max-width: 1080px) {
		
}
@media screen and (max-width: 500px) {
	font-size: 20px;
	line-height: 23px;
	margin-right: 1rem;
	margin-top: -2rem;
`
export default Title;
