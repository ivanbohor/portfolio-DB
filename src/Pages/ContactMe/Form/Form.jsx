import React from "react";
import styled from "styled-components";
import FormItems from "./FormItems/FormItems";

function Form() {
	return (
		<FormContact>
			<FormItems />
		</FormContact>
	);
}

export default Form;

const FormContact = styled.form`
	width: 600px;
	height: auto;
	padding: 15px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;
