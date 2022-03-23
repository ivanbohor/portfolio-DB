import React from "react";
import styled from "styled-components";
import imgExp from "../../../../Assets/softProyect.svg";
import imgArrow from "../../../../Assets/arrowMore.svg";
import openInNewTab from "../../../../Helpers/openNewTab";

function ProyectsContent() {
	return (
		<ExpContainer>
			<ExpDetail>
				<Img src={imgExp} />
				<InfoContainer>
					<TitleExp> Petroleum Enginering Codes</TitleExp>
					<DescriptionExp>
						In geometry, the stereographic projection is a
						particular mapping (function) that projects a sphere
						onto a plane. The projection is defined on the entire
						sphere, except at one point: the projection point. Where
						it is defined, the mapping is smooth and bijective. It
						is conformal, meaning that it preserves angles at which
						curves meet. It is neither isometric nor
						area-preserving: that is, it preserves neither distances
						nor the areas of figures. These stereonets can be used
						to visualize stresses in the subsurface to aid in
						identifying week spots.
					</DescriptionExp>
					<ButtonMore>
						<ButtonMoreText
							onClick={() =>
								openInNewTab(
									"https://github.com/danielbarr3ra/Petroleum_Enginering_Codes/blob/master/Geomechanics%20Fault%20Reactivation.ipynb"
								)
							}
						>
							More
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
	align-items: flex-start;
	gap: 15px;
`;

const Img = styled.img`
	width: 250px;
	@media screen and (max-width: 1080px) {
		width: 125px;
		height: 125px;
	}
	@media screen and (max-width: 500px) {
		width: 200px;
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
	font-size: 30px;
	color: white;
	@media screen and (max-width: 1080px) {
		font-size: 20px;
	}
	@media screen and (max-width: 500px) {
		font-size: 15px;
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
