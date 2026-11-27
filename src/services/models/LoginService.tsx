import type { LoginUsuarioDTO } from "../../dtos/LoginUsuarioDTO";
import { axiosPublic } from "../commom/axiosInstance";

class LoginService {
	async logarUsuario(dados: LoginUsuarioDTO) {
		const response = await axiosPublic.post("/login/", dados);

		localStorage.setItem("access", response.data.access);
		localStorage.setItem("refresh", response.data.refresh);

		console.log(localStorage.getItem("access"));
		console.log(localStorage.getItem("refresh"));

		return response.data;
	}
}

export default new LoginService();
