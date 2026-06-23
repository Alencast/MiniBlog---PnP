import { Controller, useForm } from "react-hook-form";
import { BrTextarea, BrButton, BrInput } from "@govbr-ds/react-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import type { Post } from "../../components/interfaces";
import PublicarService from "../../services/models/PublicarService/PublicarService";

type FormPublicarProps = {
	onPublicar: (post: Post) => void;
};

const schema = yup.object().shape({
	titulo: yup.string().required("Título é obrigatório"),
	descricao: yup.string().required("Descrição é obrigatória"),
	imagemURL: yup.mixed(),
});

/**
 * Componente responsável por exibir um formulário de criação de publicações.
 *
 * Permite ao usuário criar um novo post com título, descrição e imagem opcional,
 * enviando os dados para o serviço de publicação e retornando o post criado via callback.
 * @date 22/06/2026
 * @author roblvs
 *
 *
 * @param {FormPublicarProps} props Propriedades do componente.
 * @param {(post: Post) => void} props.onPublicar Função chamada após a publicação ser criada com sucesso.
 * Recebe o post retornado pela API.
 *
 * @returns {JSX.Element} Formulário de criação de publicação.
 *
 * @example
 * ```tsx
 * <FormPublicar
 *   onPublicar={(post) => console.log("Novo post:", post)}
 * />
 * ```
 */
export default function FormPublicar({ onPublicar }: FormPublicarProps) {
	// -----------------------------
	// Hooks do React e Form
	// -----------------------------
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function dataHandler(data: any) {
		try {
			const payload = {
				titulo: data.titulo,
				descricao: data.descricao,
				imagem: data.imagemURL,
			};

			const novoPost = await PublicarService.publicar(
				payload.titulo,
				payload.descricao,
				payload.imagem,
			);

			onPublicar(novoPost.data);
		} catch (error) {
			console.error("Erro ao publicar:", error);
		}
	}

	return (
		<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
			<div className="flex gap-4">
				<div className="flex-1 space-y-4">
					<h2 className="text-xl font-bold">Criar publicação</h2>

					<Controller
						name="titulo"
						control={control}
						render={({ field }) => (
							<BrInput
								className="w-full"
								placeholder="Título da publicação"
								value={field.value || ""}
								onChange={(e: any) =>
									field.onChange(e.target.value)
								}
								status={errors.titulo ? "danger" : undefined}
								feedbackText={errors.titulo?.message}
							/>
						)}
					/>

					<Controller
						name="descricao"
						control={control}
						render={({ field }) => (
							<BrTextarea
								className="w-full"
								placeholder="O que está acontecendo?"
								value={field.value || ""}
								onChange={(e: any) =>
									field.onChange(e.target.value)
								}
								status={errors.descricao ? "danger" : undefined}
								feedbackText={
									errors.descricao?.message as
										| string
										| undefined
								}
							/>
						)}
					/>

					<Controller
						name="imagemURL"
						control={control}
						render={({ field }) => (
							<div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
								<BrInput
									className="w-full"
									label="Imagem"
									type="file"
									accept="image/*"
									icon="fas fa-image"
									onChange={(e: any) =>
										field.onChange(e.target.files?.[0])
									}
								/>
							</div>
						)}
					/>

					<div className="border-t pt-4 flex justify-end">
						<BrButton
							className="primary"
							onClick={handleSubmit(dataHandler)}
						>
							Publicar
						</BrButton>
					</div>
				</div>
			</div>
		</div>
	);
}
