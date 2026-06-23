import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { BrInput, BrCard } from "@govbr-ds/react-components";
import Ratinho from "../../../../assets/Ratinho.jpg";

import { useNavigate } from "react-router-dom";
import LoginService from "../../../../services/models/LoginService/LoginService";

const schema = yup.object().shape({
	usuario: yup.string().required("O usuário é obrigatório"), //lembrar da verificação de usuario único
	senha: yup
		.string()
		.required("A senha é obrigatória")
		.min(6, "A senha deve ter pelo menos 6 caracteres"),
});

/**
 * Componente responsável por exibir o formulário de login do sistema.
 *
 * Permite autenticação de usuários através de usuário e senha,
 * realizando validação com react-hook-form e yup. Após login bem-sucedido,
 * redireciona o usuário para a página inicial do sistema.
 *
 * @author roblvs
 *
 *
 * @date 23/06/2026
 *
 * @returns {JSX.Element} Formulário de login com autenticação e navegação.
 *
 * @example
 * ```tsx
 * <FormLogin />
 * ```
 */

export default function FormLogin() {
	// -----------------------------
	// Estados Locais
	// -----------------------------
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

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

	// -----------------------------
	// Funções Auxiliares
	// -----------------------------
	async function dataHandler(data: any) {
		console.log(data);

		try {
			const payload = {
				username: data.usuario,
				password: data.senha,
			};

			await LoginService.logarUsuario(payload.username, payload.password);

			navigate("/home");
		} catch (error: any) {
			console.log(error);
		}
	}

	function ShowPassword() {
		setShowPassword((prev) => !prev);
	}

	return (
		<>
			{" "}
			<div className="min-h-screen flex items-center justify-center">
				<BrCard className="w-full max-w-lg rounded-3xl overflow-hidden">
					<form
						className="flex flex-col items-center gap-4 w-full p-6"
						onSubmit={handleSubmit(dataHandler)}
					>
						<h1
							className="text-center font-bold text-white leading-none"
							style={{
								fontFamily: "'Caveat', cursive",
								fontSize: "80px",
							}}
						>
							MiniBlog
						</h1>

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
									onChange={(e: any) =>
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
									onChange={(e: any) =>
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

						<div className="p-3 w-full">
							<button
								className="br-button block primary mb-3"
								type="button"
								onClick={handleSubmit(dataHandler)}
							>
								Login
							</button>

							<div className="flex items-center gap-2 mb-3">
								<a
									className="br-link"
									href="/cadastro"
								>
									Não possui conta? Crie agora
								</a>
								<button
									className="br-sign-in"
									type="button"
									onClick={() =>
										window.open(Ratinho, "_blank")
									}
								>
									Entrar com&nbsp;
									<img
										src="https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png"
										alt="gov.br"
									/>
								</button>
							</div>
						</div>
					</form>
				</BrCard>
			</div>
		</>
	);
}
