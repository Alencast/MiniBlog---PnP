import { useEffect, useState } from "react";
import CardPost from "../../components/CardPost";
import FormPublicar from "../../components/FormPublicar";
import Header from "../Header";
import PublicarService from "../../services/models/PublicarService";

// type Comentario = {
// 	id: number;
// 	texto: string;
// 	autor: string;
// };

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

	useEffect(() => {
		async function buscarPosts() {
			try {
				const posts = await PublicarService.getAllPosts();
				console.log(posts.data);
				setPosts(posts.data.results);
			} catch (error) {
				console.error(error);
			}
		}

		const intervalo = setInterval(buscarPosts, 2000);
		return () => clearInterval(intervalo);
	}, []);
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
