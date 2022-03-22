import React from "react";
import styled from "styled-components"
import IconJava from "../../../../Assets/java.svg"
import IconPy from "../../../../Assets/phyton.svg"
import IconGi from "../../../../Assets/github2.svg"
import IconSq from "../../../../Assets/sql.svg"
import IconJu from "../../../../Assets/jupyter.svg"
import IconGo from "../../../../Assets/googleCloud.svg"
import IconMa from "../../../../Assets/maven.svg"



function Icons() {
	return ( <ContainerIcons> 
				<ImgIcon src={IconJava}/>
				<ImgIcon src={IconPy}/>
				<ImgIcon src={IconGi}/>
				<ImgIcon src={IconSq}/>
				<ImgIcon src={IconJu}/>
				<ImgIcon src={IconGo}/>
				<ImgIcon src={IconMa}/>
			</ContainerIcons>);
}
const ImgIcon = styled.img`
object-fit: contain;
width: 100%;
max-height: 100px;
transition:transform 450ms;
@media screen and (max-width: 1080px) {
	
}
@media screen and (max-width: 500px) {
	
 
`
const ContainerIcons =styled.div`
display:flex;
gap:80px;


@media screen and (max-width: 1080px) {
	gap:36px;


}
@media screen and (max-width: 500px) {
	overflow-y: hidden;
	overflow-x:scroll;
`
export default Icons;
