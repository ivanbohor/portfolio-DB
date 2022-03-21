import React from "react";
import styled from "styled-components"

function Description() {
	return <StyledDesc>AboutWorkDescription Lorem ipsum dolor sit amet, 
		consectetur adipiscing elit. Etiam eu turpis molestie, 
		dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
		 accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
		  sed risus. Maecenas eget condimentum velit, sit amet feugiat
		   lectus.</StyledDesc>;
}

const StyledDesc = styled.div `
width: 503px;
height: 144px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: right;

color: #808080;
@media screen and (max-width: 1080px) {
	width: 342px;
height: 142px;
font-size: 18px;
line-height: 21px;
text-align: center;
}
@media screen and (max-width: 500px) {
	width: 154px;
height: 144px;
font-size: 12px;
line-height: 14px;
text-align: start;



`
export default Description;
