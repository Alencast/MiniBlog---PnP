import { useState } from "react";
import type { Post } from "../../pages/Home/index";
import SideBarComentarios from "../SideBarComentarios";

type CardPostProps = {
	post: Post;
};

export default function CardPost({ post }: CardPostProps) {
	const [showComentarios, setShowComentarios] = useState(false);

	function toggleComentarios() {
		setShowComentarios((prev) => !prev);
	}
	return (
		<>
			<div className="relative">
				<div className="w-full mt-5">
					<div className="br-card">
						<div className="card-header">
							<div className="d-flex">
								<span
									className="br-avatar mt-1"
									title={post.autor.nome}
								>
									<span className="content">
										<img src="https://picsum.photos/id/823/400" />
									</span>
								</span>

								<div className="ml-3">
									<div className="text-weight-semi-bold text-up-02">
										{post.autor.nome}
									</div>
									<div>FrontEnd Developer</div>
								</div>

								<div className="ml-auto">
									<button
										className="br-button circle"
										type="button"
										aria-label="Menu"
									>
										<i
											className="fas fa-ellipsis-v"
											aria-hidden="true"
										/>
									</button>
								</div>
							</div>
						</div>

						<div className="card-content">
							<h3 className="text-weight-semi-bold mb-2">
								{post.titulo}
							</h3>

							<p>{post.descricao}</p>

							{post.imagem && (
								<img
									src={post.imagem}
									alt={post.titulo}
									className="w-full rounded-lg mt-3"
								/>
							)}
						</div>
						<div className="ml-auto">
							<button
								className="br-button circle"
								type="button"
								aria-label="Ícone ilustrativo"
							>
								<i
									className="fas fa-heart"
									aria-hidden="true"
								></i>
							</button>
							<button
								className="br-button circle"
								type="button"
								aria-label="Ícone ilustrativo"
								onClick={toggleComentarios}
							>
								<i
									className="fas fa-comment"
									aria-hidden="true"
								></i>
							</button>
							<button
								className="br-button circle"
								type="button"
								aria-label="Ícone ilustrativo 3"
							>
								<i
									className="fas fa-share-alt"
									aria-hidden="true"
								></i>
							</button>
						</div>
					</div>
				</div>
				{showComentarios && (
					<div className="absolute top-0 left-full ml-5 w-80">
						<SideBarComentarios postId={post.id} />
					</div>
				)}
			</div>
		</>
	);
}
