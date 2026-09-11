import { BrButton, BrTextarea } from "@govbr-ds/react-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import CardComentario from "./CardComentario";
import { useEffect, useState } from "react";
import ComentarioService from "../services/models/ComentarioService";

type SideBarComentariosProps = {
	postId: number;
};
type Comentario = {
	id: number;
	publicacao: number;
	mensagem: string;
	publicado_em: string;
	autor: {
		id: number;
		username: string;
		nome: string;
	};
};
const schema = yup.object().shape({
	comentario: yup
		.string()
		.required("O comentário é obrigatório")
		.max(200, "O comentário não pode ter mais de 200 caracteres"),
});
export default function SideBarComentarios({
	postId,
}: SideBarComentariosProps) {
	const [comentarios, setComentarios] = useState<Comentario[]>([]);

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function adicionarComentario(novoComentario: Comentario) {
		setComentarios([...comentarios, novoComentario]);
	}
	// const usuario = localStorage.getItem("usuario");

	// const nomeUsuario = usuario ? JSON.parse(usuario).nome : "Usuário";

	async function dataHandler(data: any) {
		try {
			const response = await ComentarioService.cadastrarComentario(
				postId,
				data.comentario,
			);

			adicionarComentario(response.data);
			reset();
		} catch (error: any) {
			console.log(error.response?.status);
			console.log(error.response?.data);
		}
	}

	useEffect(() => {
		async function buscarComentarios() {
			const coments = await ComentarioService.getAllComentarios();
			console.log(coments);

			const comentariosDoPost = coments.filter(
				(coment: Comentario) => coment.publicacao === postId,
			);
			setComentarios(comentariosDoPost);
		}
		buscarComentarios();

		const intervalo = setInterval(buscarComentarios, 2000);
		return () => clearInterval(intervalo);
	}, [postId]);

	return (
		<div className="w-[500px] bg-white rounded-2xl shadow-lg border border-slate-200 p-6 h-[700px] flex flex-col">
			<div className="font-bold mb-4">Comentários</div>

			<div className="flex-1 overflow-y-auto">
				{comentarios.map((comentario) => (
					<CardComentario
						key={comentario.id}
						mensagem={comentario.mensagem}
						autor={comentario.autor.nome}
					/>
				))}
			</div>

			<div className="mt-4 border-t pt-4">
				<Controller
					name="comentario"
					control={control}
					render={({ field }) => (
						<BrTextarea
							className="w-full"
							placeholder="Escreva seu comentário..."
							value={field.value || ""}
							onChange={(e) => field.onChange(e.target.value)}
							status={errors.comentario ? "danger" : undefined}
							feedbackText={errors.comentario?.message}
						/>
					)}
				/>

				<BrButton
					className="primary mt-2"
					onClick={handleSubmit(dataHandler)}
				>
					Enviar
				</BrButton>
			</div>
		</div>
	);
}
