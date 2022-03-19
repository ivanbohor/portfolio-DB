import React from "react";
import styled from "styled-components";
import WorkImage from "../../../../Assets/aboutWorkImage.svg"

function Image() {
	return(
		<ContainerImg> 
		 <Img src={WorkImage} />
		 </ContainerImg>
		 );
}

const ContainerImg = styled.div`
width: 329px;
height: 301.35px;
margin-right: 10rem;
`
const Img = styled.img`
`

export default Image;
