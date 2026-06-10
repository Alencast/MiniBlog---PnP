import { BrHeader } from "@govbr-ds/react-components";

export default function Header() {
	return (
		<BrHeader
			menuId="main-navigation"
			title="Portal de Cadastro"
			signature="Sistema de Autocadastro"
			subTitle="Versão 1.0"
			urlLogo="https://www.gov.br/ds/assets/img/govbr-logo.png"
			showSearchBar={false}
			showMenuButton={false}
			quickAccessLinks={[
				{
					label: "Início",
					onClick: () => {},
				},
				{
					label: "Ajuda",
					onClick: () => {},
				},
				{
					label: "Contato",
					onClick: () => {},
				},
			]}
			features={[
				{
					icon: "user-plus",
					label: "Cadastro",
					onClick: () => {},
				},
				{
					icon: "shield-alt",
					label: "Segurança",
					onClick: () => {},
				},
				{
					icon: "question-circle",
					label: "Suporte",
					onClick: () => {},
				},
			]}
		/>
	);
}
