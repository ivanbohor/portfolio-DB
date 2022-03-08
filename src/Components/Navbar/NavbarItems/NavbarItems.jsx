import React, { useContext } from "react";
import styled from "styled-components";
import { SectionOnScreenContext } from "../../../Context/sectionOnScreen";

function NavbarItems() {
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
			<Li onClick={toggleHome} border={home}>
				<ALink>Home_</ALink>
			</Li>
			<Li onClick={toggleAbout} border={about}>
				<ALink>About ME_</ALink>
			</Li>
			<Li onClick={toggleSoftware} border={software}>
				<ALink>Software Testing_</ALink>
			</Li>
			<Li onClick={togglePetroleum} border={petroleum}>
				<ALink>Petroleum Engineering_</ALink>
			</Li>
			<Buttons bgColor='transparent'>Resume</Buttons>
			<Buttons border='none' color='white' onClick={toggleContact}>
				Contact
			</Buttons>
		</Ul>
	);
}

export default NavbarItems;

const Ul = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;

	justify-content: flex-end;
	align-items: center;

	padding: 0px 30px;

	flex-wrap: nowrap;
	gap: 60px;

	background-color: var(--bodyBackgroundColor);
`;

const ALink = styled.a`
	text-decoration: none;
	cursor: pointer;
`;

const Li = styled.li`
	width: 207px;
	height: 35px;
	line-height: 35px;
	list-style: none;
	color: var(--orangeStrong);
	font-family: var(--sanchezFont);
	font-weight: 400;
	font-size: 18px;
	text-align: center;
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

const Buttons = styled.button`
	width: 154px;
	height: 38px;
	border-radius: 20px;

	font-family: var(--robotoFont);
	font-weight: 400;
	font-size: 24px;

	color: ${({ color }) => color || "var(--orangeStrong)"};
	background-color: ${({ bgColor }) => bgColor || "var(--orangeStrong)"};
	border: ${({ border }) => border || "3px solid var(--orangeStrong)"};

	cursor: pointer;
`;
