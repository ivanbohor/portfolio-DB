import React from "react";
import styled from "styled-components";
import imgArrow from  "../../../../../Assets/Scroll.svg";
import imgFle from  "../../../../../Assets/Vector.svg";

function Arrow() {
	return ( <div> 
	<Img src={imgArrow}/>
	<ImgM src={imgFle}/>
	</div>
	
	)
}
const ImgM = styled.img`
width:32px;
height:48px;
margin-top: 3rem;
@media screen and (min-width: 1080px) {
	display:none;
}`
const  Img = styled.img `
width:32px;
height:48px;
margin-top: 1rem;

@media screen and (max-width: 1080px) {
	display:none;
}
@media screen and (max-width: 500px) {
	width: 287px;
	height: 51px;
	display:none;
	`
export default Arrow;
