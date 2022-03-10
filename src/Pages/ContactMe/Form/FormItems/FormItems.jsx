import React, { useState } from "react";
import styled from "styled-components";
import checkContactForm from "../../../../Helpers/checkContactForm";

function FormItems({ toggleSent, toggleShow }) {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [body, setBody] = useState();

	const clickSubmit = (e) => {
		e.preventDefault();
		checkContactForm(name, email, body, toggleSent, toggleShow);
	};

	return (
		<>
			<InputForm
				onChange={(e) => setName(e.target.value)}
				placeholder='Name'
			/>
			<InputForm
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Email'
			/>
			<TextAreaForm
				placeholder='Your message'
				onChange={(e) => setBody(e.target.value)}
			/>
			<SubmitContact onClick={(e) => clickSubmit(e)}>
				Submit!
			</SubmitContact>
		</>
	);
}

export default FormItems;

const InputForm = styled.input`
	width: 100%;
	height: 45px;
	background: var(--orangeLight40Percent);
	color: var(--grey);
	padding-left: 10px;

	border: none;
	transition: 0.2s linear;

	font-size: 18px;
	border-bottom: 1px solid var(--orangeStrong);

	:focus {
		outline: none;
	}

	:hover {
		transition: 0.2s linear;
		background: rgba(248, 150, 31, 0.637);
	}
	::placeholder {
		padding-left: 5px;
		color: white;
	}
`;

const TextAreaForm = styled.textarea`
	width: 100%;
	height: 150px;
	background: var(--orangeLight40Percent);
	color: var(--grey);
	border: none;
	resize: none;
	transition: 0.2s linear;
	padding: 10px 10px;
	font-size: 18px;
	border-bottom: 1px solid var(--orangeStrong);

	:hover {
		transition: 0.2s linear;
		background: rgba(248, 150, 31, 0.637);
	}

	::placeholder {
		padding-left: 5px;
		color: white;
	}

	:focus {
		outline: none;
	}
`;

const SubmitContact = styled.button`
	width: 100%;
	height: 38px;
	background: var(--orangeLight40Percent);
	color: white;
	border-radius: 5px;
	transition: 0.2s linear;
	cursor: pointer;
	border: none;
	border-bottom: 1px solid var(--orangeStrong);

	:hover {
		transition: 0.2s linear;
		background: rgba(248, 150, 31, 0.637);
	}
`;
