// import { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FormCadastro from "./features/autocadastro/forms/FormCadastro";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FormLogin from "./features/autocadastro/forms/FormLogin";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import DomeGallery from "./components/DomeGallery";

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
						<>
							<div className="absolute inset-0">
								<DomeGallery />
							</div>

							<div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
								<div className="pointer-events-auto">
									<FormLogin />
								</div>
							</div>
						</>
					}
				/>
				<Route
					path="/cadastro"
					element={
						<>
							<div className="absolute inset-0">
								<DomeGallery />
							</div>

							<div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
								<div className="pointer-events-auto">
									<FormCadastro />
								</div>
							</div>
						</>
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
