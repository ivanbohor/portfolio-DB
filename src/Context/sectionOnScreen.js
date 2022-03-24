import { createContext, useState } from "react";

export const SectionOnScreenContext = createContext();

const SectionOnScreenContextProvider = ({ children }) => {
	const [home, setHome] = useState(true);
	const [about, setAbout] = useState(false);
	const [software, setSoftware] = useState(false);
	const [petroleum, setPetroleum] = useState(false);
	const [resume, setResume] = useState(false);
	const [contact, setContact] = useState(false);

	const toggleHome = () => {
		setHome(true);
		setAbout(false);
		setSoftware(false);
		setPetroleum(false);
		setResume(false);
		setContact(false);
	};

	const toggleAbout = () => {
		setHome(false);
		setAbout(true);
		setSoftware(false);
		setPetroleum(false);
		setResume(false);
		setContact(false);
	};

	const toggleSoftware = () => {
		setHome(false);
		setAbout(false);
		setSoftware(true);
		setPetroleum(false);
		setResume(false);
		setContact(false);
	};

	const togglePetroleum = () => {
		setHome(false);
		setAbout(false);
		setSoftware(false);
		setPetroleum(true);
		setResume(false);
		setContact(false);
	};
	const toggleResume = () => {
		setHome(false);
		setAbout(false);
		setSoftware(false);
		setPetroleum(false);
		setResume(true);
		setContact(false);
	};

	const toggleContact = () => {
		setHome(false);
		setAbout(false);
		setSoftware(false);
		setPetroleum(false);
		setResume(false);
		setContact(true);
	};

	return (
		<SectionOnScreenContext.Provider
			value={{
				home,
				about,
				software,
				petroleum,
				resume,
				contact,
				toggleHome,
				toggleAbout,
				toggleSoftware,
				togglePetroleum,
				toggleResume,
				toggleContact,
			}}
		>
			{children}
		</SectionOnScreenContext.Provider>
	);
};

export default SectionOnScreenContextProvider;
