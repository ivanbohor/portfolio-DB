import React from "react";
import styled from "styled-components"

function Description() {
	return <ConteinerDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		 Etiam eu turpis molestie, dictum est a, mattis tellus. Sed 
		 dignissim, metus nec fringilla accumsan, risus sem sollicitudin
		  lacus, ut interdum tellus elit sed risus. Maecenas eget 
		  condimentum velit, sit amet feugiat lectus.
	 </ConteinerDesc>;
}
const ConteinerDesc = styled.div`
width: 503px;
height: 144px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;

color: #808080;

`

export default Description;
