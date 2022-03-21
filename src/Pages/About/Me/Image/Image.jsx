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
@media screen and (max-width: 1080px) {
}
@media screen and (max-width: 500px) {
width: 181.06px;
height: 191.45px;
`
const Img = styled.img`
@media screen and (max-width: 1080px) {
	width: 275.78px;
	height: 270.67px;
}
@media screen and (max-width: 500px) {
	width: inherit;
	width: 181.06px;
height: 191.45px;
	`
export default Image;
