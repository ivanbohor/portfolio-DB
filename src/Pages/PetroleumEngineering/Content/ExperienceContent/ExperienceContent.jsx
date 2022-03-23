import React from "react";
import styled from "styled-components";
import imgExp from "../../../../Assets/experiencePetroleum1.svg";

function ExperienceContent() {
	return (
		<ExpContainer>
			<ExpDetail>
				<Img src={imgExp} />
				<InfoContainer>
					<TitleExp> Senior Thesis</TitleExp>
					<DateExp> January 2020 - May 2020 </DateExp>
					<ItemsExp>
						<Bullets>
							Created a drilling completion, and production design
							for an Otsego County, well in Michigan U.S.
						</Bullets>
						<Bullets>
							Calculated the energy output by through decline
							curves for the volume produced, and monte carlo
							simulations.
						</Bullets>
						<Bullets>
							Reported regulatory and facilities cost using the
							government data from Michigan.
						</Bullets>
					</ItemsExp>
				</InfoContainer>
			</ExpDetail>
			<ExpDetail>
				<Img src={imgExp} />
				<InfoContainer>
					<TitleExp> Lab Assistant</TitleExp>
					<DateExp> May 2019 - September 2019 </DateExp>
					<ItemsExp>
						<Bullets>
							Created 200+ chemical samples to research the
							interfacial effects from different surfactants in
							different oils.
						</Bullets>
						<Bullets>
							Gained experience in both developing chemical
							solutions and core flooding experiments to simulate
							in situ reservoir conditions.
						</Bullets>
						<Bullets>Compiled 2 research reports.</Bullets>
					</ItemsExp>
				</InfoContainer>
			</ExpDetail>
		</ExpContainer>
	);
}

export default ExperienceContent;

const ExpContainer = styled.div`
	width: 97%;
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

const Img = styled.img`
	width: 125px;
	height: 125px;
	padding-left: 5px;
	@media screen and (max-width: 1080px) {
		width: 125px;
		height: 125px;
	}
	@media screen and (max-width: 500px) {
		width: 100px;
		height: 100px;
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

const ItemsExp = styled.ul`
	width: 100%;
	text-align: start;
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const Bullets = styled.li`
	width: 95%;
	text-align: start;
	font-family: var(--robotoFont);
	color: white;
	font-size: 16px;
	font-weight: 300;
	@media screen and (max-width: 1080px) {
		font-size: 14px;
	}
`;
