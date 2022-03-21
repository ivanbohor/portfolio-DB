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
@media screen and (max-width: 1080px) {
	width :248.17px;
height :241.68px;
margin-top: 1rem;

}
@media screen and (max-width: 500px) {
	width :144.22px;
height :140.39px;
margin-right: 0rem;
margin-top: 2rem;
padding-left: 1rem;



`
const Img = styled.img`
@media screen and (max-width: 1080px) {
}
@media screen and (max-width: 500px) {
	width: inherit;

`

export default Image;
