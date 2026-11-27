import type { CriarComentarioDTO } from "../../dtos/CriarComentarioDTO";
import axiosInstance from "../commom/axiosInstance";
import type { Comentario } from "../../models/Comentario";

class ComentarioService {
	async cadastrarComentario(dados: CriarComentarioDTO) {
		const response = await axiosInstance.post<Comentario>(
			"/comentario/",
			dados,
		);

		return response;
	}

	async getAllComentarios() {
		const response = await axiosInstance.get<Comentario[]>("/comentario/");
		return response.data;
	}
}

export default new ComentarioService();
