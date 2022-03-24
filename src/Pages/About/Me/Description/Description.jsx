import React from "react";
import styled from "styled-components"


function Description() {
	return <ConteinerDesc > Hello everyone I’m a current software engineer in QA and I hold a B.Sc. In petroleum engineering. 
	As a QA I focus on Extract Transform Load Pipelines (ETL) at a FAANG. I Focused on specific products by providing technical, 
	linguistic, locale and semantic expertise to multiple teams in order to improve different softwares and end user experience 
	as well as meeting stakeholders' expectations by working simultaneously on multiple projects for media entertainment providers/partners.<br/><br/>
	As a <b>petroleum engineer</b>. I mainly focused on using tools like machine learning to provide meaningful statistics to evaluate original oil 
	in place and production decline in active wells. As well as having in lab experience developing surfactant solutions for enhanced oil recovery
	experiments and core flooding. 
	</ConteinerDesc>;
}
const ConteinerDesc = styled.div`
width: 503px;
height: 391px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #808080;
@media screen and (max-width: 1080px) {
width: 410px;
height: 526px;
font-size: 18px;
line-height: 21px;
}
@media screen and (max-width: 500px) {
	width: 165px;
	height: 317px;
	font-size: 12px;
	line-height: 14px;
	text-align: left;
}
`

export default Description;
