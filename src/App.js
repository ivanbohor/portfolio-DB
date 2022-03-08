import Navbar from "./Components/Navbar/Navbar";
import styled from "styled-components";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import PetroleumEngineering from "./Pages/PetroleumEngineering/PetroleumEngineering";
import SoftwareTesting from "./Pages/SoftwareTesting/SoftwareTesting";
import ContactMe from "./Pages/ContactMe/ContactMe";
import IconsMedia from "./Components/IconsMedia/IconsMedia";

function App() {
	return (
		<AppStyled>
			<Navbar />
			<IconsMedia />
			<Home />
			<About />
			<PetroleumEngineering />
			<SoftwareTesting />
			<ContactMe />
		</AppStyled>
	);
}

export default App;

const AppStyled = styled.div`
	// width para evitar tener en cuenta la barra de scroll en el ancho . Width 100% seria hasta donde empieza el scroll
	width: calc(100vw- (100vw - 100%));
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
