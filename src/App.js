import Navbar from "./Components/Navbar/Navbar";
import styled from "styled-components";
import Pages from "./Pages/Pages";

function App() {
	return (
		<AppStyled>
			<Navbar />
			<Pages />
		</AppStyled>
	);
}

export default App;

const AppStyled = styled.div`
	// width para evitar tener en cuenta la barra de scroll en el ancho . Width 100% seria hasta donde empieza el scroll
	width: calc(100vw- (100vw - 100%));
	height: 100vh;
	position: relative;
`;
