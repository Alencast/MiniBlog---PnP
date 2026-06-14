type CardPostProps = {
	titulo: string;
	descricao: string;
	imagem?: File;
};

export default function CardPost({ titulo, descricao, imagem }: CardPostProps) {
	const usuario = localStorage.getItem("usuario");

	const nomeUsuario = usuario
		? JSON.parse(usuario).nome
		: "Usuário não encontrado";
	return (
		<div className="w-full mt-5">
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
								{nomeUsuario}
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
					<h3 className="text-weight-semi-bold mb-2">{titulo}</h3>

					<p>{descricao}</p>

					{imagem && (
						<img
							src={URL.createObjectURL(imagem)}
							alt={titulo}
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
	);
}
