import type {
	Control,
	FieldErrors,
	FieldValues,
	Path,
} from "react-hook-form";
import FormField from "./FormField";
import PasswordToggle from "./PasswordToggle";

type CredentialsFieldsProps<T extends FieldValues> = {
	control: Control<T>;
	errors: FieldErrors<T>;
	showPassword: boolean;
	onTogglePassword: () => void;
	includePassword?: boolean;
};

export default function CredentialsFields<T extends FieldValues>({
	control,
	errors,
	showPassword,
	onTogglePassword,
	includePassword = true,
}: CredentialsFieldsProps<T>) {
	return (
		<>
			<FormField
				name={"usuario" as Path<T>}
				control={control}
				errors={errors}
				label="Usuário"
				placeholder="Digite seu usuário"
				icon="fas fa-user-tie"
			/>
			{includePassword && (
				<FormField
					name={"senha" as Path<T>}
					control={control}
					errors={errors}
					label="Senha"
					placeholder="Digite sua senha"
					icon="fas fa-lock"
					type={showPassword ? "text" : "password"}
					button={
						<PasswordToggle
							showPassword={showPassword}
							onClick={onTogglePassword}
						/>
					}
				/>
			)}
		</>
	);
}
