import sendMessage from "./sendMessage";

function checkContactForm(
	name = "",
	email = "",
	body = "",
	toggleSent,
	toggleShow
) {
	if (
		name === "" ||
		email === "" ||
		body === "" ||
		body === undefined ||
		email.includes("@") === false ||
		email.includes(".com") === false
	) {
		toggleShow();
		console.log("ERROR");
	} else {
		sendMessage(name, email, body);
		toggleSent();
		toggleShow();
		console.log("Envio");
	}
}
export default checkContactForm;
