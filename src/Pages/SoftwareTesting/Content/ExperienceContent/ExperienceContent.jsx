import React from "react";
import styled from "styled-components";
import imgExp from "../../../../Assets/experienceSoftware1.svg";

function ExperienceContent() {
	return (
		<ExpContainer>
			<ExpDetail>
				<Img src={imgExp} />
				<InfoContainer>
					<TitleExp> Software Testing Engineer</TitleExp>
					<DateExp> February 2021 - Present </DateExp>
					<ItemsExp>
						<Bullets>
							Curated and migrated 10 terabytes of raw json, xml,
							and yaml files to eventually reach their respective
							schemas in databases.
						</Bullets>
						<Bullets>
							Automated format verification by writing a bash
							script to query multiple text files when SQL was
							unreliable.
						</Bullets>
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
	align-self: flex-start;

	width: 150px;
	height: 150px;
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
	font-size: 30px;
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
	font-size: 20px;
	font-weight: 400;
	@media screen and (max-width: 1080px) {
		font-size: 15px;
	}
`;

const ItemsExp = styled.ul`
	width: 100%;
	text-align: start;
	padding-left: 20px;
	@media screen and (max-width: 1080px) {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;

const Bullets = styled.li`
	width: 95%;
	text-align: start;
	font-family: var(--robotoFont);
	color: white;
	font-size: 18px;
	font-weight: 300;
	@media screen and (max-width: 1080px) {
		font-size: 15px;
	}
`;
