import Header from "../Header";
import CardPost from "../../components/CardPost";
import FormPublicar from "../../components/FormPublicar";
import { useState } from "react";

type Post = {
	titulo: string;
	descricao: string;
	imagem?: File;
};

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

					{posts.map((post, index) => (
						<CardPost
							key={index}
							titulo={post.titulo}
							descricao={post.descricao}
							imagem={post.imagem}
						/>
					))}
				</div>
			</div>
		</>
	);
}
