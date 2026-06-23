import axiosInstance from "../../commom/axiosInstance";

class CadastroService {
	async cadastrarUsuario(username: string, nome: string, senha: string) {
		const response = await axiosInstance.post("/cadastrar/", {
			username,
			nome,
			senha,
		});
		return response;
	}
}

export default new CadastroService();
