import { BrButton, BrTextarea } from "@govbr-ds/react-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import CardComentario from "./CardComentario";
import { useState } from "react";

const schema = yup.object().shape({
	comentario: yup.string().required("O comentário é obrigatório"),
});
export default function SideBarComentarios() {
	const [comentarios, setComentarios] = useState<string[]>([]);

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function adicionarComentario(novoComentario: string) {
		setComentarios([...comentarios, novoComentario]);
	}
	const usuario = localStorage.getItem("usuario");

	const nomeUsuario = usuario ? JSON.parse(usuario).nome : "Usuário";

	async function dataHandler(data: any) {
		adicionarComentario(data.comentario);
		reset();
		console.log(data);
	}
	return (
		<div className="w-[500px] bg-white rounded-2xl shadow-lg border border-slate-200 p-6 h-[700px] flex flex-col">
			<div className="font-bold mb-4">Comentários</div>

			<div className="flex-1 overflow-y-auto">
				{comentarios.map((comentario, index) => (
					<CardComentario
						key={index}
						mensagem={comentario}
						autor={nomeUsuario}
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
