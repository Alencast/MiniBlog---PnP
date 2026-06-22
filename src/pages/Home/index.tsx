import { useEffect, useState } from "react";
import CardPost from "../../components/CardPost";
import FormPublicar from "../../components/FormPublicar";
import Header from "../Header";
import PublicarService from "../../services/models/PublicarService";
import type { Post } from "../../interfaces/interface";


export default function Home() {
	const [posts, setPosts] = useState<Post[]>([]);

	function adicionarPost(novoPost: Post) {
		setPosts((prev) => [novoPost, ...prev]);
	}

	async function buscarPosts() {
		try {
			const posts = await PublicarService.getAllPosts();
			console.log(posts.data);
			setPosts(posts.data.results);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
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
