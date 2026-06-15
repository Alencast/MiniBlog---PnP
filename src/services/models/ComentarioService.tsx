import axiosInstance from "../commom/axiosInstance";

class ComentarioService {
	async cadastrarComentario(postId: number, texto: string) {
		const response = await axiosInstance.post("/comentarios/", {
			postId,
			texto,
		});
		return response;
	}
}
