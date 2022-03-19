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
align-self: center;
margin-right:12rem;
`
export default Skills;
