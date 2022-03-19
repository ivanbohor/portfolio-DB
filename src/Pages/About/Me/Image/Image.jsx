import React from "react";
import MeImage from "../../../../Assets/aboutMeImage.png"
import styled from "styled-components";


function Image() {
	return (
	<ContainerImg> 
		<Img src={MeImage}/>
	</ContainerImg>
		
		)
}

const ContainerImg= styled.div`
width: 316.14px;
height: 310.28px;
`
const Img = styled.img`

`
export default Image;
