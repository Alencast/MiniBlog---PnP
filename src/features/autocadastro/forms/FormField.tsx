import { Controller, type Control, type FieldErrors, type FieldValues, type Path } from "react-hook-form";
import { BrInput } from "@govbr-ds/react-components";
import type { ReactNode } from "react";

type FormFieldProps<T extends FieldValues> = {
	control: Control<T>;
	errors: FieldErrors<T>;
	name: Path<T>;
	label: string;
	placeholder: string;
	icon: string;
	type?: string;
	button?: ReactNode;
};

export default function FormField<T extends FieldValues>({
	control,
	errors,
	name,
	label,
	placeholder,
	icon,
	type,
	button,
}: FormFieldProps<T>) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const error = errors[name];

				return (
					<BrInput
						className="w-full"
						label={label}
						placeholder={placeholder}
						icon={icon}
						type={type}
						value={field.value || ""}
						onChange={(e) => field.onChange(e.target.value)}
						onBlur={field.onBlur}
						status={error ? "danger" : undefined}
						feedbackText={
							typeof error?.message === "string"
								? error.message
								: undefined
						}
						button={button}
					/>
				);
			}}
		/>
	);
}
