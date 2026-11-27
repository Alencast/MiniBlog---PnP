import type { Usuario } from "./Usuario";

export interface Publicacao {
	id: number;
	titulo: string;
	imagem: string | null;
	descricao: string;
	autor: Usuario;
	publicado_em: string;
}
