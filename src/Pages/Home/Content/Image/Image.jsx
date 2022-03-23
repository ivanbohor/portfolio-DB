import React from "react";
import styled from "styled-components";
import imgPol from "../../../../Assets/homeoctogono.svg";
import imgLog from "../../../../Assets/LogoD.png";


function Image() {
	return (<ImgContainer>
				<Img src={imgPol} />
				<ImgL  src={imgLog} /> 
			</ImgContainer>
			)
}

const ImgContainer = styled.div`
position:relative;
width:70%;
margin-top:2rem;
@media screen and (max-width: 1080px) {	
}
@media screen and (max-width: 500px) {
}`
const Img = styled.img`
	width: 100%;
	@media screen and (max-width: 1080px) {
		width:373.67px;
		height:363.42px;
	}
	@media screen and (max-width: 500px) {
		width: 236px;
		height: 230px;
	}`;

	const ImgL = styled.img`
	width: 50%;
	position: absolute;
    top: 0;
    left: 0;    
    right: 0;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
}
	`

export default Image;
