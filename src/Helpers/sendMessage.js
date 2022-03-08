function sendMessage(name, email, body) {
	fetch("https://formsubmit.co/ajax/PONERMAIL", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			Name: name,
			Email: email,
			Message: body,
		}),
	}).then((response) => response.json());
}
export default sendMessage;
