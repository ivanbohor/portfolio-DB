import React from "react";
import styled from "styled-components"

function Title() {
	return <StyledTitle>Skills_
		<LineT/>
	</StyledTitle>;
}
const LineT = styled.div`
margin-top: 18px;
margin-left: 25px;
width: 253px;
height: 0px;
left: 107px;
top: 499px;
border: 1px dashed #F8971F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display:none;
@media screen and (max-width: 1080px) {
	display:inherit;
	width: 553px;
	border: 2px dashed #F8971F;
}
@media screen and (max-width: 500px) {
display:inherit;
`
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
	display:flex;
	width:auto;
	height: 86.98px;
	font-size: 35px;
	line-height: 40px;
	margin-bottom: 0rem;

}
@media screen and (max-width: 500px) {
display:flex;
height: 46px;
font-size: 24px;
line-height: 28px;
width:auto;
margin-bottom: 0rem;



`
export default Title;
