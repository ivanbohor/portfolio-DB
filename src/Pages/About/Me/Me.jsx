import React from "react";
import Title from "./Title/Title";
import Image from "./Image/Image";
import Description from "./Description/Description";
import styled from "styled-components";

function Me() {
	return (
		<>
		<ContainerMe> 
		<Title />
			<ContainerText> 
				<Description />
				<Image />
			</ContainerText>
		</ContainerMe>

		</>
	);
}

const ContainerText= styled.div`
margin-right:2.5rem;
padding-left: 1rem;
display:flex;
column-gap: 7rem;
@media screen and (max-width: 1080px) {
	column-gap: 7rem;
}
@media screen and (max-width: 500px) {
	column-gap: 2rem;
	margin-right:0rem;
padding-left: 1rem;

`
const ContainerMe = styled.div`
display :block;
gap:6rem;
width:100%;
margin-right:12rem;
@media screen and (max-width: 1080px) {
	gap:0rem;

}
@media screen and (max-width: 500px) {
	width:100%;
	height:573px;
	margin-right:0rem;
	gap:0rem;
`
export default Me;
