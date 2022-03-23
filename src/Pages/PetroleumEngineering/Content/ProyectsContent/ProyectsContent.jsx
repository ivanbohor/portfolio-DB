import React from "react";
import styled from "styled-components";
import imgExp from "../../../../Assets/petroleumProyect.svg";
import imgArrow from "../../../../Assets/arrowMore.svg";
import openInNewTab from "../../../../Helpers/openNewTab";

function ProyectsContent() {
	return (
		<ExpContainer>
			<ExpDetail>
				<Img src={imgExp} />
				<InfoContainer>
					<TitleExp> Senior Thesis</TitleExp>
					<DateExp> January 2020 - May 2020 </DateExp>
					<DescriptionExp>
						Developed a drilling, completion, and production design
						for an Otsego County, well in Michigan U.S.Calculated
						OOIP using MBE equations, established Decline Curves
						using Arps Equations, and montecarlo
						simulations.Analyzed Niagara Reef systems, along with
						the evaluation of well logs.Estimated costs for the
						drilling and completions and estimated the regulatory
						and facilities cost using government data.
					</DescriptionExp>
					<ButtonMore>
						<ButtonMoreText
							onClick={() =>
								openInNewTab(
									"https://docs.google.com/presentation/d/1Vt8ZE5qSLjqgOVVXqgR1y5QnrdhbazNw/edit#slide=id.p1"
								)
							}
						>
							Final Report
						</ButtonMoreText>
						<ImgP src={imgArrow} alt='arrow' />
					</ButtonMore>
					<ButtonMore>
						<ButtonMoreText
							onClick={() =>
								openInNewTab(
									"https://drive.google.com/file/d/14mBDRuINWDe5N2Tws6fuAG4VxYn14Knq/view"
								)
							}
						>
							Thesis
						</ButtonMoreText>
						<img src={imgArrow} alt='arrow' />
					</ButtonMore>
				</InfoContainer>
			</ExpDetail>
		</ExpContainer>
	);
}

export default ProyectsContent;

const ExpContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding-bottom: 10px;
`;

const ExpDetail = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 15px;
`;

const ImgP = styled.img`
	width: 250px;
	width: 350px;
	@media screen and (max-width: 500px) {
		width: 125px;
		height: 125px;
	}
`;

const InfoContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;
`;

const TitleExp = styled.div`
	width: 100%;
	text-align: start;
	font-family: var(--trispaceFont);
	font-weight: 400;
	font-size: 28px;
	color: white;
	@media screen and (max-width: 1080px) {
		font-size: 20px;
	}
	@media screen and (max-width: 500px) {
		font-size: 15px;
	}
`;

const DateExp = styled.div`
	width: 100%;
	text-align: start;
	font-family: var(--robotoFont);
	color: white;
	font-size: 18px;
	font-weight: 400;
	@media screen and (max-width: 1080px) {
		font-size: 20px;
	}
	@media screen and (max-width: 500px) {
		font-size: 10px;
	}
`;

const DescriptionExp = styled.div`
	width: 100%;
	text-align: start;
	font-family: var(--robotoFont);
	color: white;
	font-size: 18px;
	font-weight: 300;
	@media screen and (max-width: 1080px) {
		font-size: 15px;
	}
`;

const ButtonMore = styled.button`
	background-color: transparent;
	border: none;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const ButtonMoreText = styled.div`
	width: 95%;
	text-align: end;
	color: white;
	font-family: var(--robotoFont);
	font-weight: 500;
	font-size: 20px;
	padding: 5px;
	cursor: pointer;
	@media screen and (max-width: 1080px) {
		font-size: 15px;
	}
`;
