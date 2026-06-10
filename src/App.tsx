// import { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./features/autocadastro/components/Header";
import FormCadastro from "./features/autocadastro/forms/FormCadastro";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<FormCadastro />
		</>
	);
}

export default App;
