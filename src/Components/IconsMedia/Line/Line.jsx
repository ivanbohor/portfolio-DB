import React from "react";
import styled from "styled-components";

function Line() {
	return <LineStyled></LineStyled>;
}

export default Line;

const LineStyled = styled.div`
	width: 1px;
	height: 60%;
	background-color: var(--orangeStrong);
`;
