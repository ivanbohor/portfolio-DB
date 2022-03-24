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
width: 402.48px;
height: 395.03px;
@media screen and (max-width: 1080px) {

}
@media screen and (max-width: 500px) {
width: 195.06px;
height: 191.45px;
margin-top:6rem;

`
const Img = styled.img`
width: inherit;
@media screen and (max-width: 1080px) {
	width: 290.78px;
	height: 280.67px;
	margin-top: 3rem;
}
@media screen and (max-width: 500px) {
	width: inherit;
	width: 185px;
	height: 191px;
	margin-top: 0rem;
	`
export default Image;
