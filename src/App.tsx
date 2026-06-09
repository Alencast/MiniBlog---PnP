// import { useState } from "react";
import "./App.css";
import Header from "./features/autocadastro/components/Header";
import FormCadastro from "./features/autocadastro/forms/formCadastro";

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
