import { BrHeader } from "@govbr-ds/react-components";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	function logout() {
		localStorage.removeItem("access");
		navigate("/login");
	}

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
				{
					label: "Sair",
					onClick: () => logout(),
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
