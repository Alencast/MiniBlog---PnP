import type { MouseEventHandler } from "react";

type PasswordToggleProps = {
	showPassword: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function PasswordToggle({
	showPassword,
	onClick,
}: PasswordToggleProps) {
	return (
		<button
			className="br-button"
			type="button"
			aria-label="Exibir senha"
			role="switch"
			aria-checked="false"
			onClick={onClick}
		>
			<i
				className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}
				aria-hidden="true"
			></i>
		</button>
	);
}
