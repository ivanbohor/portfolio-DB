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
padding-left: 1rem;
@media screen and (max-width: 1080px) {
}
@media screen and (max-width: 500px) {
	margin-right:1.5rem;

`
const ContainerMe = styled.div`
display :flex;
gap:10rem;
width:100%;
margin-right:12rem;
@media screen and (max-width: 1080px) {
	gap:4rem;

}
@media screen and (max-width: 500px) {
	width:auto;
	margin-right:0rem;
	gap:0rem;



`
export default Me;
