import React from "react";
import styled from "styled-components"
function Title() {
	return <TitleStyled>About my work_</TitleStyled>;

}

const TitleStyled = styled.div`
width: 510px;
height: 87px;
font-family: 'Trispace';
font-style: normal;
font-weight: 600;
font-size: 55px;
line-height: 62px;
color: #F8971F;
@media screen and (max-width: 1080px) {
	width: 368px;
height: 40px;
font-size: 35px;
line-height: 40px;
margin-bottom: 3rem;
}
@media screen and (max-width: 500px) {
width: 222px;
height: 28px;
font-size: 24px;
line-height: 28px;
text-align: right;
margin-bottom: 1rem;

`

export default Title;
