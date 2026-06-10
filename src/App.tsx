// import { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FormCadastro from "./features/autocadastro/forms/FormCadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import bgImage from "./assets/bg.jpg";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div
								className="min-h-screen md:grid-cols-1 items-center justify-center bg-cover bg-center"
								style={{
									backgroundImage: `url(${bgImage})`,
								}}
							>
								<FormCadastro />
							</div>
						}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
