import React from "react";
import style from "styled-components"
function Title() {
	return (
	<TitleStyled>About ME_</TitleStyled>
	)
	
}
const TitleStyled=style.div`
width: 359px;
height: 87px;
font-family: 'Trispace';
font-style: normal;
font-weight: 600;
font-size: 55px;
line-height: 62px;
color: #F8971F;
`

export default Title;
