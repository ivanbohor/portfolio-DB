import React from "react";
import Title from "./Title/Title";
import Icons from "./Icons/Icons";
import styled from "styled-components"

function Skills() {
	return (
		<>
		<ContainerSkills> 
			<Title />
			<Icons />
		</ContainerSkills>
		</>
	);
}
const ContainerSkills = styled.div`
display:block;
flex-direction: column;
flex-flow: wrap;
align-self: flex-start;
margin-top: 3rem;
@media screen and (max-width: 1080px) {
	padding-left: 1rem;
}
@media screen and (max-width: 500px) {
	padding-left: 1rem;

`
export default Skills;
