// async publicar(titulo: string, descricao: string, imagem: File | null) {
// 		const formData = new FormData();

// 		formData.append("titulo", titulo);

export interface CriarPublicacaoDTO {
	titulo: string;
	descricao: string;
	imagem: File | null;
}
