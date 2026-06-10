// import { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./pages/Header";
import FormCadastro from "./features/autocadastro/forms/FormCadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<FormCadastro />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
