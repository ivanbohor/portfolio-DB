import React from "react";
import styled from "styled-components";
import imgPol from "../../../../Assets/homeoctogono.svg";


function Image() {
	return (<ImgContainer>
				<Img src={imgPol} />
			</ImgContainer>
	)
}

const ImgContainer = styled.div`
display: ;
@media screen and (max-width: 1080px) {	
}
@media screen and (max-width: 500px) {
	margin-bottom: 3rem;
}`
const Img = styled.img`
	width: 29.61rem;
	height: 28.82rem;
	margin-left:11.6rem;
	margin-top: 5rem;
	@media screen and (max-width: 1080px) {
		margin-left:0rem;
		width:373.67px;
		height:363.42px;
		margin-top: 3rem;
	}
	@media screen and (max-width: 500px) {
		margin-left: 0rem;
		width: 236px;
		height: 230px;
		margin-top: 2rem;
	}`;

export default Image;
