import React from "react";
import styled from "styled-components"

function Title() {
	return <StyledTitle>Skills_</StyledTitle>;
}
const StyledTitle = styled.div`
width: 359px;
height: 87px;
font-family: 'Trispace';
font-style: normal;
font-weight: 600;
font-size: 55px;
line-height: 62px;
color: #F8971F;
margin-bottom: 1rem;
@media screen and (max-width: 1080px) {
	width: 274.18px;
	height: 86.98px;
	font-size: 35px;
line-height: 40px;
}
@media screen and (max-width: 500px) {
width: 145px;
height: 46px;
font-size: 24px;
line-height: 28px;


`

export default Title;
