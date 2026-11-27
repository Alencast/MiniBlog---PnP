import type { Usuario } from "./Usuario";
import type { Publicacao } from "./Publicacao";

export interface Comentario {
	id: number;
	autor: Usuario;
	publicacao: Publicacao;
	mensagem: string;
	publicado_em: string;
}
