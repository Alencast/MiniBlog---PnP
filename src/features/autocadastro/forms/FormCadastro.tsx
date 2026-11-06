import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { BrMessage, BrCard } from "@govbr-ds/react-components";
import CadastroService from "../../../services/models/CadastroService";
import FormField from "./FormField";
import CredentialsFields from "./CredentialsFields";
import PasswordToggle from "./PasswordToggle";
import FormHeader from "./FormHeader";

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

			localStorage.setItem(
				"usuario",
				JSON.stringify({
					nome: payload.nome,
					username: payload.username,
				}),
			);
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

	function togglePassword() {
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

						<FormHeader />
						<CredentialsFields
							control={control}
							errors={errors}
							showPassword={showPassword}
							onTogglePassword={togglePassword}
							includePassword={false}
						/>
						<FormField
							name="nome"
							control={control}
							errors={errors}
							label="Nome"
							placeholder="Digite seu nome completo"
							icon="fas fa-user"
						/>

						<FormField
							name="senha"
							control={control}
							errors={errors}
							label="Senha"
							placeholder="Digite sua senha"
							icon="fas fa-lock"
							type={showPassword ? "text" : "password"}
							button={
								<PasswordToggle
									showPassword={showPassword}
									onClick={togglePassword}
								/>
							}
						/>

						<FormField
							name="confirmacao_senha"
							control={control}
							errors={errors}
							label="Confirmação de Senha"
							placeholder="Digite sua senha novamente"
							icon="fas fa-lock"
							type={showPassword ? "text" : "password"}
							button={
								<PasswordToggle
									showPassword={showPassword}
									onClick={togglePassword}
								/>
							}
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
