import axiosInstance from "../commom/axiosInstance";

class ComentarioService {
	async cadastrarComentario(publicacao: number, mensagem: string) {
		const response = await axiosInstance.post("/comentario/", {
			publicacao,
			mensagem,
		});

		return response;
	}

	async getAllComentarios() {
		const response = await axiosInstance.get("/comentario/");
		return response.data.results;
	}
}

export default new ComentarioService();
