// import { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FormCadastro from "./features/autocadastro/forms/FormCadastro";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import bgImage from "./assets/bg.jpg";
import FormLogin from "./features/autocadastro/forms/FormLogin";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Navigate
							to="/login"
							replace
						/>
					}
				/>

				<Route
					path="/login"
					element={
						<div
							className="min-h-screen md:grid-cols-1 items-center justify-center bg-cover bg-center"
							style={{ backgroundImage: `url(${bgImage})` }}
						>
							<FormLogin />
						</div>
					}
				/>

				<Route
					path="/cadastro"
					element={
						<div
							className="min-h-screen md:grid-cols-1 items-center justify-center bg-cover bg-center"
							style={{ backgroundImage: `url(${bgImage})` }}
						>
							<FormCadastro />
						</div>
					}
				/>

				<Route element={<PrivateRoute />}>
					<Route
						path="/home"
						element={<Home />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
