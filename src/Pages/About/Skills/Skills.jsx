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
margin-top: 2rem;
@media screen and (max-width: 1080px) {
	padding-left: 1rem;
	margin-top: 0rem;

}
@media screen and (max-width: 500px) {
	padding-left: 1rem;
	max-width:100%;

`
export default Skills;
