export interface Autor {
	id: number;
	username: string;
	nome: string;
}

export interface Post {
	id: number;
	titulo: string;
	descricao: string;
	imagem?: string;
	autor: Autor;
	publicado_em: string;
}
export interface FormData {
	comentario: string;
}

export interface Comentario {
	id: number;
	publicacao: number;
	mensagem: string;
	publicado_em: string;
	autor: {
		id: number;
		username: string;
		nome: string;
	};
}
