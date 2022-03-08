import sendMessage from "./sendMessage";

function checkContactForm(name, email, body) {
	if (
		name === "" ||
		email === "" ||
		body === "" ||
		body === undefined ||
		email.includes("@") === false ||
		email.includes(".com") === false
	) {
		console.log("ERROR CAMPOS INCORRECTOS");
	} else {
		sendMessage(name, email, body);
		console.log("ENVIADO");
	}
}
export default checkContactForm;
