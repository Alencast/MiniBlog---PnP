import type { Post } from "../pages/Home/index";

type CardComentarioProps = {
	mensagem: string;
};

export default function CardComentario({ mensagem }: CardComentarioProps) {
	return (
		<div className="mt-5">
			<div className="br-card">
				<div className="card-header">
					<div className="d-flex">
						<span
							className="br-avatar mt-1"
							title="Fulano da Silva"
						>
							<span className="content">
								<img src="https://picsum.photos/id/823/400" />
							</span>
						</span>

						<div className="ml-3">
							<div className="text-weight-semi-bold text-up-02">
								Maria Amorim
							</div>
						</div>
					</div>
				</div>

				<div className="card-content">
					<p>{mensagem}</p>
				</div>
			</div>
		</div>
	);
}
