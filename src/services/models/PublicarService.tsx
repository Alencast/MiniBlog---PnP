import axiosInstance from "../commom/axiosInstance";

class PublicarService {
	async publicar(titulo: string, descricao: string, imagem: File | null) {
		const formData = new FormData();

		formData.append("titulo", titulo);
		formData.append("descricao", descricao);

		if (imagem) {
			formData.append("imagem", imagem);
		}
		const response = await axiosInstance.post("/publicacao/", formData);

		return response;
	}

	async getAllPosts() {
		const response = await axiosInstance.get("/publicacao/");
		return response;
	}
}

export default new PublicarService();
