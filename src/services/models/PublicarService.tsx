import type { CriarPublicacaoDTO } from "../../dtos/CriarPublicacaoDTO";
import axiosInstance from "../commom/axiosInstance";

class PublicarService {
	async publicar(dados: CriarPublicacaoDTO) {
		const formData = new FormData();

		formData.append("titulo", dados.titulo);
		formData.append("descricao", dados.descricao);

		if (dados.imagem) {
			formData.append("imagem", dados.imagem);
		}
		const response = await axiosInstance.post("/publicacao/", formData);

		return response;
	}

	async getAllPosts() {
		const response = await axiosInstance.get("/publicacao/");
		return response;
	}

	async deletePost(id: number) {
		const response = await axiosInstance.delete(`/publicacao/${id}/`);
		return response;
	}
}

export default new PublicarService();
