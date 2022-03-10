import Navbar from "./Components/Navbar/Navbar";
import styled from "styled-components";
import Pages from "./Pages/Pages";
import NavbarResponsive from "./Components/NavbarResponsive/NavbarResponsive";

function App() {
	return (
		<AppStyled>
			<Navbar />
			<NavbarResponsive />
			<Pages />
		</AppStyled>
	);
}

export default App;

const AppStyled = styled.div`
	// width para evitar tener en cuenta la barra de scroll en el ancho . Width 100% seria hasta donde empieza el scroll
	width: calc(100vw- (100vw - 100%));
	position: relative;
`;
