import React, { useContext } from "react";
import styled from "styled-components";
import { SectionOnScreenContext } from "../../../Context/sectionOnScreen";

function ContactButton({ close }) {
	const { toggleContact } = useContext(SectionOnScreenContext);

	return (
		<ButtonStyled
			onClick={() => {
				close();
			}}
			href='#contact'
		>
			Contact
		</ButtonStyled>
	);
}

export default ContactButton;

const ButtonStyled = styled.a`
	display: none;
	width: 100px;
	height: 30px;
	line-height: 30px;
	background-color: var(--orangeStrong);
	border: none;

	background: #bf5700;
	border-radius: 20px;
	font-size: 16px;
	font-family: var(--robotoFont);
	font-weight: 400;
	color: white;
	z-index: 1000;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	:visited {
		color: white;
	}

	@media screen and (max-width: 1400px) {
		display: unset;
	}
`;
