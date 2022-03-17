import React, { useContext } from "react";
import styled from "styled-components";
import { SectionOnScreenContext } from "../../../Context/sectionOnScreen";

function Line() {
	const { petroleum } = useContext(SectionOnScreenContext);
	return <LineStyled bgColor={`${petroleum}`} />;
}

export default Line;

const LineStyled = styled.div`
	width: 1px;
	height: 70%;
	background-color: ${({ bgColor }) =>
		bgColor === "true" ? "white" : "var(--orangeStrong)"};
	z-index: 999;
	@media screen and (max-width: 1080px) {
	}
	@media screen and (max-width: 500px) {
		height: 49%;
	}
`;
