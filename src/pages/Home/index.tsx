import { useState } from "react";
import CardPost from "../../components/CardPost";
import FormPublicar from "../../components/FormPublicar";
import Header from "../Header";

type Comentario = {
	id: number;
	texto: string;
	autor: string;
};

export type Autor = {
	id: number;
	username: string;
	nome: string;
};

export type Post = {
	id: number;
	titulo: string;
	descricao: string;
	imagem?: string;
	autor: Autor;
	publicado_em: string;
};

// export type CriarPostDTO = {
// 	titulo: string;
// 	descricao: string;
// 	imagem?: File;
// };

export default function Home() {
	const [posts, setPosts] = useState<Post[]>([]);

	function adicionarPost(novoPost: Post) {
		setPosts((prev) => [novoPost, ...prev]);
	}
	return (
		<>
			<Header />

			<div className="min-h-screen bg-slate-100 py-8">
				<div className="max-w-2xl mx-auto">
					<FormPublicar onPublicar={adicionarPost} />

					{posts.map((post) => (
						<CardPost
							key={post.id}
							post={post}
						/>
					))}
				</div>
			</div>
		</>
	);
}
