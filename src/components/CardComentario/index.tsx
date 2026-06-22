type CardComentarioProps = {
	mensagem: string;
	autor: string;
};

/**
 * Componente responsável por exibir um comentário em formato de card.
 *
 * @author roblvs
 *
 * @param {CardComentarioProps} props Propriedades do componente.
 * @param {string} props.mensagem Conteúdo do comentário.
 * @param {string} props.autor Nome do autor do comentário.
 *
 * @example
 * ```tsx
 * <CardComentario
 *   mensagem="Muito bom o post!"
 *   autor="João Silva"
 * />
 * ```
 */
export default function CardComentario({
	mensagem,
	autor,
}: CardComentarioProps) {
	return (
		<div className="mt-5">
			<div className="br-card">
				<div className="card-header">
					<div className="d-flex">
						<span
							className="br-avatar mt-1"
							title={autor}
						>
							<span className="content">
								<img src="https://picsum.photos/id/823/400" />
							</span>
						</span>

						<div className="ml-3">
							<div className="text-weight-semi-bold text-up-02">
								{autor}
							</div>
						</div>
					</div>
				</div>

				<p className="break-words whitespace-pre-wrap">{mensagem}</p>
			</div>
		</div>
	);
}
