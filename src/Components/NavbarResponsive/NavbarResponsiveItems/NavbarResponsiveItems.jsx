import React from "react";
import styled from "styled-components";

function NavbarResponsiveItems({ toggleShow }) {
	return (
		<Ul>
			<Li
				onClick={() => {
					toggleShow();
				}}
			>
				<SpeciaLink href='#home'>Get To Know Me</SpeciaLink>
			</Li>
			<Li
				onClick={() => {
					toggleShow();
				}}
			>
				<RegularLink href='#about'>About_</RegularLink>
			</Li>
			<Li
				onClick={() => {
					toggleShow();
				}}
			>
				<RegularLink href='#software'>Software Testing_</RegularLink>
			</Li>
			<Li
				onClick={() => {
					toggleShow();
				}}
			>
				<RegularLink href='#petroleum'>
					Petroleum Engineering_
				</RegularLink>
			</Li>
			<ButtonLink
				bgColor='transparent'
				onClick={() => {
					toggleShow();
				}}
				href='#resume'
			>
				Resume
			</ButtonLink>
			<ButtonLink
				border='none'
				color='white'
				onClick={() => {
					toggleShow();
				}}
				href='#contact'
			>
				Contact
			</ButtonLink>
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
	:visited {
		color: white;
	}
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

const RegularLink = styled(ALink)`
	color: white;
	font-size: 16px;
`;
const ButtonLink = styled(ALink)`
	width: 207px;
	height: 38px;
	line-height: 34px;
	border-radius: 20px;

	font-family: var(--robotoFont);
	font-weight: 400;
	font-size: 24px;

	color: ${({ color }) => color || "var(--orangeStrong)"};
	background-color: ${({ bgColor }) => bgColor || "var(--orangeStrong)"};
	border: ${({ border }) => border || "3px solid var(--orangeStrong)"};

	cursor: pointer;
	align-self: center;
	text-align: center;
`;

const SmallLink = styled(ALink)`
	font-size: 16px;
`;
