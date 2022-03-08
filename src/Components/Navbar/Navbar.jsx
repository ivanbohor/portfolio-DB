import React from "react";
import styled from "styled-components";
import NavbarItems from "./NavbarItems/NavbarItems";

function Navbar() {
	return (
		<NavbarStyled>
			<NavbarItems />
		</NavbarStyled>
	);
}

export default Navbar;

const NavbarStyled = styled.nav`
	width: 100%;
	height: 50px;
	position: sticky;
	top: 0px;
	z-index: 999;
`;
