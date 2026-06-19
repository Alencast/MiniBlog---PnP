import { BrHeader } from "@govbr-ds/react-components";
import logo from "../../assets/logo.jpg";

export default function Header() {
	return (
		<BrHeader
			menuId="main-navigation"
			title=""
			signature=""
			subTitle=""
			urlLogo={logo}
			showLoginButton={false}
			showSearchBar={true}
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
					icon: "newspaper",
					label: "Publicações",
					onClick: () => {},
				},
				{
					icon: "comments",
					label: "Comunidade",
					onClick: () => {},
				},
				{
					icon: "rss",
					label: "Novidades",
					onClick: () => {},
				},
			]}
		/>
	);
}
