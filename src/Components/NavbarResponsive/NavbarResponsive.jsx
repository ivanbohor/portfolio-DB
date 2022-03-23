import React, { useContext, useState } from "react";
import styled from "styled-components";
import NavbarResponsiveItems from "./NavbarResponsiveItems/NavbarResponsiveItems";
import IconsResponsive from "./IconsResponsive/IconsResponsive";
import ButtonCloseX from "./ButtonCloseX/ButtonCloseX";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import ContactButton from "./ContactButton/ContactButton";
import { SectionOnScreenContext } from "../../Context/sectionOnScreen";

function NavbarResponsive() {
	const [show, setShow] = useState(false);
	const { contact } = useContext(SectionOnScreenContext);

	const toggleShow = () => {
		setShow(!show);
	};

	const close = () => {
		setShow(false);
	};

	return (
		<>
			{show && (
				<BlackContainer onClick={toggleShow}>
					<NavbarStyled>
						<NavbarResponsiveItems toggleShow={toggleShow} />
						<IconsResponsive toggleShow={toggleShow} />
						<ButtonCloseX toggleShow={toggleShow} />
					</NavbarStyled>
				</BlackContainer>
			)}
			<TopBar>
				<ButtonMenu toggleShow={toggleShow} />
				{!contact && !show && <ContactButton close={close} />}
			</TopBar>
		</>
	);
}

export default NavbarResponsive;

const NavbarStyled = styled.div`
	width: 300px;
	height: calc(100vh - var(--NavbarHeight));

	bottom: 0px;
	left: 0px;

	padding-bottom: 5px;

	position: absolute;
	display: none;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	z-index: 1001;
	background-color: var(--NavbarResponsiveColor);
	@media screen and (max-width: 1150px) {
		display: flex;
	}
`;

const BlackContainer = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(73, 39, 10, 0.493);
	z-index: 1000;
`;

const TopBar = styled.div`
	width: 100%;
	height: var(--NavbarHeight);
	padding: 0px 20px;
	top: 0px;
	position: sticky;
	display: none;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: var(--NavbarResponsiveColor);
	z-index: 1000;
	@media screen and (max-width: 1150px) {
		display: flex;
	}
`;
