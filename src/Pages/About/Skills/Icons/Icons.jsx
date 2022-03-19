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
width: 77px;
height: 77px;
 
`
const ContainerIcons =styled.div`
display:flex;
gap:75px;
margin-bottom:1rem;
`
export default Icons;
