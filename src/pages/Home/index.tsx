import { Controller, useForm } from "react-hook-form";
import { BrTextarea, BrButton, BrInput } from "@govbr-ds/react-components";
import Header from "../Header";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	titulo: yup.string().required("Título é obrigatório"),
	descricao: yup.string().required("Descrição é obrigatória"),
	imagemURL: yup.string().url("URL da imagem inválida"),
});
export default function Home() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function dataHandler(data: any) {
		console.log(data);
	}
	return (
		<>
			<Header />

			<div className="min-h-screen bg-slate-100 py-8">
				<div className="max-w-2xl mx-auto">
					<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
						<div className="flex gap-4">
							<div className="flex-1 space-y-4">
								<h2 className="text-xl font-bold">
									Criar publicação
								</h2>

								<Controller
									name="titulo"
									control={control}
									render={({ field }) => (
										<BrInput
											className="w-full"
											label=""
											placeholder="Título da publicação"
											value={field.value || ""}
											onChange={(e) =>
												field.onChange(e.target.value)
											}
											status={
												errors.titulo
													? "danger"
													: undefined
											}
											feedbackText={
												errors.titulo?.message
											}
										/>
									)}
								/>

								<Controller
									name="descricao"
									control={control}
									render={({ field }) => (
										<BrTextarea
											className="w-full"
											label=""
											placeholder="O que está acontecendo?"
											value={field.value || ""}
											onChange={(e) =>
												field.onChange(e.target.value)
											}
										/>
									)}
								/>

								<Controller
									name="imagemURL"
									control={control}
									render={({ field }) => (
										<BrInput
											className="w-full"
											label=""
											placeholder="Cole a URL da imagem"
											icon="fas fa-image"
											value={field.value || ""}
											onChange={(e) =>
												field.onChange(e.target.value)
											}
											status={
												errors.imagemURL
													? "danger"
													: undefined
											}
											feedbackText={
												errors.imagemURL?.message
											}
										/>
									)}
								/>

								<div className="border-t pt-4 flex justify-between items-center">
									<div className="flex gap-4 text-slate-500"></div>

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
				</div>
			</div>
		</>
	);
}
