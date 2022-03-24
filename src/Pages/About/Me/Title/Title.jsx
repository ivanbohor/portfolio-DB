import React from "react";
import styled from "styled-components"
function Title() {
	return <TitleStyled> About ME_ <LineT/></TitleStyled>
}
const LineT = styled.div`
margin-left: 1px;
width: 141px;
height: 0px;
left: 107px;
top: 499px;
border: 1px dashed #F8971F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display:none;
@media screen and (max-width: 1080px) {
	display:inherit;
	width: 61%;
	border: 2px dashed #F8971F;
}
@media screen and (max-width: 500px) {
display:inherit;
width:59%;

`
const TitleStyled= styled.div`
width: 359px;
height: 87px;
font-family: 'Trispace';
font-style: normal;
font-weight: 600;
font-size: 55px;
line-height: 62px;
color: #F8971F;
@media screen and (max-width: 1080px) {
	width:98%;
	height: 86.98px;
	font-size: 35px;
	line-height: 40px;
	display:flex;
	align-items: baseline;
	column-gap: 1rem;
	margin-left: 1rem;

}
@media screen and (max-width: 500px) {
	display:flex;
	width:96%;
	height: 72px;
	font-size: 24px;
	line-height: 28px;
	align-items: baseline;
	margin-left: 1rem;`

export default Title;
