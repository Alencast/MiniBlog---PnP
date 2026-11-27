import type { CadastroUsuarioDTO } from "../../dtos/CadastroUsuarioDTO";
import { axiosPublic } from "../commom/axiosInstance";

class CadastroService {
	async cadastrarUsuario(dados: CadastroUsuarioDTO) {
		const response = await axiosPublic.post("/cadastrar/", dados);
		return response;
	}
}

export default new CadastroService();
