import React from "react";
import Title from "./Title/Title";
import Arrow from "./Arrow/Arrow";
import styled from "styled-components";

function KnowMe() {
	return ( 
		<ContainerKnow>
			<Title />
			<Arrow />
		</ContainerKnow>
	)
		
}
const ContainerKnow = styled.div `
width : 18.62rem;
height: 2.8rem;
display:flex;
flex-direction: column;
align-items: center;
margin-botom: 2.1rem;
@media screen and (max-width: 1080px) {
		
}
@media screen and (max-width: 500px) {
	width:187px;
	height:46px;
	margin-top: 2rem;
`
export default KnowMe;
