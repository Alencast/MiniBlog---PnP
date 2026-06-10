import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function dataHandler(data: any) {
		console.log(data);
	}
	return (
		<>
			<div className="bg-gray-100 p-9 rounded-lg shadow-md max-w-md mx-auto">
				<form
					className="flex flex-col items-center"
					onSubmit={handleSubmit(dataHandler)}
				>
					<h1>Autocadastro</h1>
					<div className="col-sm-6 col-lg-12 mb-3">
						<div className="br-input">
							<label htmlFor="usuario">Usuário</label>
							<div className="input-group">
								<div className="input-icon">
									<i
										className="fas fa-user-tie"
										aria-hidden="true"
									></i>
								</div>
								<input
									id="usuario"
									type="text"
									placeholder="Digite seu usuário"
									{...register("usuario")}
								/>
								{errors.usuario && (
									<span className="bg-danger text-white p-2 rounded">
										{errors.usuario.message}
									</span>
								)}
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-12 mb-3">
						<div className="br-input">
							<label htmlFor="nome">Nome</label>
							<div className="input-group">
								<div className="input-icon">
									<i
										className="fas fa-user-tie"
										aria-hidden="true"
									></i>
								</div>
								<input
									id="nome"
									type="text"
									placeholder="Digite seu nome completo"
									{...register("nome")}
								/>
								{errors.nome && (
									<span className="bg-danger text-white p-2 rounded">
										{errors.nome.message}
									</span>
								)}
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-12 mb-3">
						<div className="br-input input-button">
							<label htmlFor="input-password">Senha</label>
							<input
								id="senha"
								type="password"
								placeholder="Digite sua senha"
								{...register("senha")}
							/>
							{errors.senha && (
								<span className="bg-danger text-white p-2 rounded">
									{errors.senha.message}
								</span>
							)}
							<button
								className="br-button"
								type="button"
								aria-label="Exibir senha"
								role="switch"
								aria-checked="false"
							>
								<i
									className="fas fa-eye"
									aria-hidden="true"
								></i>
							</button>
						</div>
					</div>
					<div className="col-sm-6 col-lg-12 mb-3">
						<div className="br-input input-button">
							<label htmlFor="confirmacao_senha">
								Confirmação de Senha
							</label>
							<input
								id="confirmacao_senha"
								type="password"
								placeholder="Digite sua senha novamente"
								{...register("confirmacao_senha")}
							/>
							{errors.confirmacao_senha && (
								<span className="bg-danger text-white p-2 rounded">
									{errors.confirmacao_senha.message}
								</span>
							)}
							<button
								className="br-button"
								type="button"
								aria-label="Exibir senha"
								role="switch"
								aria-checked="false"
							>
								<i
									className="fas fa-eye"
									aria-hidden="true"
								></i>
							</button>
						</div>
					</div>
					<div className="p-3 w-full">
						<button
							className="br-button block primary mb-3"
							type="button"
							onClick={handleSubmit(dataHandler)}
						>
							Cadastrar
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
