import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { BrInput, BrMessage, BrCard } from "@govbr-ds/react-components";
import CadastroService from "../../../services/models/CadastroService";
import Footer from "../../../pages/Footer";
import Header from "../../../pages/Header";

const schema = yup.object().shape({
	nome: yup.string().required("O nome é obrigatório"),
	usuario: yup.string().required("O usuário é obrigatório"), //lembrar da verificação de usuario único
	senha: yup
		.string()
		.required("A senha é obrigatória")
		.min(6, "A senha deve ter pelo menos 6 caracteres"),
	confirmacao_senha: yup
		.string()
		.required("A confirmação de senha é obrigatória")
		.oneOf([yup.ref("senha")], "As senhas não coincidem"),
});

export default function FormCadastro() {
	const [mostrarMensagem, setMostrarMensagem] = useState(false);
	const [statusMensagem, setStatusMensagem] = useState<"success" | "danger">(
		"success",
	);
	const [tituloMensagem, setTituloMensagem] = useState("");
	const [textoMensagem, setTextoMensagem] = useState("");

	const [showPassword, setShowPassword] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	//functions
	async function dataHandler(data: any) {
		try {
			const payload = {
				username: data.usuario,
				nome: data.nome,
				senha: data.senha,
			};
			await CadastroService.cadastrarUsuario(
				payload.username,
				payload.nome,
				payload.senha,
			);
			setTituloMensagem("Sucesso.");
			setStatusMensagem("success");
			setTextoMensagem("Seu cadastro foi concluído");
			setMostrarMensagem(true);
			reset();
			console.log(data);
		} catch (error) {
			setMostrarMensagem(false);

			setTimeout(() => {
				setTituloMensagem("Erro.");
				setStatusMensagem("danger");
				setTextoMensagem("Usuário já cadastrado");
				setMostrarMensagem(true);
			}, 5);
		}
	}

	function ShowPassword() {
		setShowPassword((prev) => !prev);
	}

	return (
		<>
			<div className="min-h-screen flex items-center justify-center">
				<BrCard className="w-full max-w-lg rounded-3xl overflow-hidden">
					<form
						className="flex flex-col items-center gap-4 w-full p-6"
						onSubmit={handleSubmit(dataHandler)}
					>
						{mostrarMensagem && (
							<BrMessage
								title={tituloMensagem}
								message={textoMensagem}
								status={statusMensagem}
								closable
								inlineTitle
							></BrMessage>
						)}

						<h1>Autocadastro</h1>

						{/*Novos inputs */}

						<Controller
							name="usuario"
							control={control}
							render={({ field }) => (
								<BrInput
									className="w-full"
									label="Usuário"
									placeholder="Digite seu usuário"
									icon="fas fa-user-tie"
									value={field.value || ""}
									onChange={(e) =>
										field.onChange(e.target.value)
									}
									onBlur={field.onBlur}
									status={
										errors.usuario ? "danger" : undefined
									}
									feedbackText={errors.usuario?.message}
								/>
							)}
						/>

						<Controller
							name="nome"
							control={control}
							render={({ field }) => (
								<BrInput
									className="w-full"
									label="Nome"
									placeholder="Digite seu nome completo"
									icon="fas fa-user"
									value={field.value || ""}
									onChange={(e) =>
										field.onChange(e.target.value)
									}
									onBlur={field.onBlur}
									status={errors.nome ? "danger" : undefined}
									feedbackText={errors.nome?.message}
								/>
							)}
						/>

						<Controller
							name="senha"
							control={control}
							render={({ field }) => (
								<BrInput
									className="w-full"
									label="Senha"
									placeholder="Digite sua senha"
									icon="fas fa-lock"
									type={showPassword ? "text" : "password"}
									value={field.value || ""}
									onChange={(e) =>
										field.onChange(e.target.value)
									}
									onBlur={field.onBlur}
									status={errors.senha ? "danger" : undefined}
									feedbackText={errors.senha?.message}
									button={
										<button
											className="br-button"
											type="button"
											aria-label="Exibir senha"
											role="switch"
											aria-checked="false"
											onClick={ShowPassword}
										>
											<i
												className={
													showPassword
														? "fas fa-eye"
														: "fas fa-eye-slash"
												}
												aria-hidden="true"
											></i>
										</button>
									}
								/>
							)}
						/>

						<Controller
							name="confirmacao_senha"
							control={control}
							render={({ field }) => (
								<BrInput
									className="w-full"
									label="Confirmação de Senha"
									placeholder="Digite sua senha novamente"
									icon="fas fa-lock"
									type={showPassword ? "text" : "password"}
									value={field.value || ""}
									onChange={(e) =>
										field.onChange(e.target.value)
									}
									onBlur={field.onBlur}
									status={
										errors.confirmacao_senha
											? "danger"
											: undefined
									}
									feedbackText={
										errors.confirmacao_senha?.message
									}
									button={
										<button
											className="br-button"
											type="button"
											aria-label="Exibir senha"
											role="switch"
											aria-checked="false"
											onClick={ShowPassword}
										>
											<i
												className={
													showPassword
														? "fas fa-eye"
														: "fas fa-eye-slash"
												}
												aria-hidden="true"
											></i>
										</button>
									}
								/>
							)}
						/>

						<div className="p-3 w-full">
							<button
								className="br-button block primary mb-3"
								type="button"
								onClick={handleSubmit(dataHandler)}
							>
								Cadastrar
							</button>

							<a
								className="br-link"
								href="/login"
							>
								Já possui conta? Faça login
							</a>
						</div>
					</form>
				</BrCard>
			</div>
		</>
	);
}
