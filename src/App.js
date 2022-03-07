import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import PetroleumEngineering from "./Pages/PetroleumEngineering/PetroleumEngineering";
import SoftwareTesting from "./Pages/SoftwareTesting/SoftwareTesting";
import ContactMe from "./Pages/ContactMe/ContactMe";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Home />
			<About />
			<PetroleumEngineering />
			<SoftwareTesting />
			<ContactMe />
		</div>
	);
}

export default App;
