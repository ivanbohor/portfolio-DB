import React, { useContext } from "react";
import styled from "styled-components";
import { SectionOnScreenContext } from "../../../Context/sectionOnScreen";

function NavbarResponsiveItems({ toggleShow }) {
	const {
		home,
		about,
		software,
		petroleum,
		toggleHome,
		toggleAbout,
		toggleSoftware,
		togglePetroleum,
		toggleContact,
	} = useContext(SectionOnScreenContext);

	return (
		<Ul>
			<Li
				onClick={() => {
					toggleHome();
					toggleShow();
				}}
				border={home}
			>
				<SpeciaLink>Get To Know Me</SpeciaLink>
			</Li>
			<Li
				onClick={() => {
					toggleAbout();
					toggleShow();
				}}
				border={about}
			>
				<ALink>About_</ALink>
			</Li>
			<Li
				onClick={() => {
					toggleSoftware();
					toggleShow();
				}}
				border={software}
			>
				<ALink>Software Testing_</ALink>
			</Li>
			<Li
				onClick={() => {
					togglePetroleum();
					toggleShow();
				}}
				border={petroleum}
			>
				<SmallLink>Petroleum Engineering_</SmallLink>
			</Li>
			<Buttons bgColor='transparent' onClick={toggleShow}>
				Resume
			</Buttons>
			<Buttons
				border='none'
				color='white'
				onClick={() => {
					toggleContact();
					toggleShow();
				}}
			>
				Contact
			</Buttons>
		</Ul>
	);
}

export default NavbarResponsiveItems;

const Ul = styled.ul`
	width: 100%;
	padding-top: 15px;

	display: flex;
	flex-direction: column;

	justify-content: flex-start;
	align-items: flex-start;

	flex-wrap: nowrap;
	gap: 40px;
`;

const ALink = styled.a`
	text-decoration: none;
	cursor: pointer;
`;

const Li = styled.li`
	width: 207px;
	height: 35px;
	padding-left: 15px;
	line-height: 35px;
	list-style: none;
	color: white;
	font-family: var(--sanchezFont);
	font-weight: 400;
	font-size: 18px;
	text-align: start;
	cursor: pointer;
	border-bottom: ${({ border }) =>
		border ? "1px solid var(--orangeStrong)" : "none"};
	position: relative;

	::before {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		width: 0;
		height: ${({ border }) => (border ? "0" : "1px")};
		background-color: var(--orangeStrong);
		transition: ${({ border }) =>
			border ? "none" : "width 0.6s cubic-bezier(0.25, 1, 0.5, 1)"};
	}

	:hover::before {
		left: 0;
		right: auto;
		width: 100%;
	}
`;

const SpeciaLink = styled(ALink)`
	font-family: var() (--sanchezFont);
	font-size: 24px;
`;

const SmallLink = styled(ALink)`
	font-size: 16px;
`;

const Buttons = styled.button`
	width: 207px;
	height: 38px;
	border-radius: 20px;

	font-family: var(--robotoFont);
	font-weight: 400;
	font-size: 24px;

	color: ${({ color }) => color || "var(--orangeStrong)"};
	background-color: ${({ bgColor }) => bgColor || "var(--orangeStrong)"};
	border: ${({ border }) => border || "3px solid var(--orangeStrong)"};

	cursor: pointer;
	align-self: center;
`;
