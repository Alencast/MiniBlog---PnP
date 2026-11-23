import { BrFooter } from "@govbr-ds/react-components";

const AD_LABEL = "Ad deserunt nostrud";
const NULLA_LABEL = "Nulla occaecat eiusmod";
const EX_LABEL = "Ex qui laborum consectetur aute commodo";

export default function Footer() {
	return (
		<BrFooter
			links={[
				{
					category: "Categoria 1",
					items: [
						{ label: AD_LABEL, link: "#" },
						{ label: NULLA_LABEL, link: "#" },
						{ label: NULLA_LABEL, link: "#" },
					],
				},
				{
					category: "Categoria 2",
					items: [
						{ label: EX_LABEL, link: "#" },
						{ label: NULLA_LABEL, link: "#" },
						{ label: EX_LABEL, link: "#" },
					],
				},
				{
					category: "Categoria 3",
					items: [
						{ label: AD_LABEL, link: "#" },
						{ label: EX_LABEL, link: "#" },
						{ label: NULLA_LABEL, link: "#" },
					],
				},
				{
					category: "Categoria 4",
					items: [
						{ label: AD_LABEL, link: "#" },
						{ label: EX_LABEL, link: "#" },
						{ label: NULLA_LABEL, link: "#" },
					],
				},
				{
					category: "Categoria 5",
					items: [
						{ label: EX_LABEL, link: "#" },
						{ label: NULLA_LABEL, link: "#" },
						{ label: NULLA_LABEL, link: "#" },
					],
				},
				{
					category: "Categoria 6",
					items: [
						{ label: EX_LABEL, link: "#" },
						{ label: NULLA_LABEL, link: "#" },
						{ label: NULLA_LABEL, link: "#" },
					],
				},
			]}
			socialNetworks={[
				{
					icon: "fab fa-facebook-square",
					link: "#",
					name: "Facebook",
				},
				{
					icon: "fab fa-twitter-square",
					link: "#",
					name: "Twitter",
				},
				{
					icon: "fab fa-linkedin",
					link: "#",
					name: "Linkedin",
				},
			]}
			urlLogo="https://www.gov.br/ds/assets/img/govbr-logo.png"
			userLicenseText={
				<>
					Texto destinado a exibição de informações relacionadas à 
					<b>licença de uso.</b>
				</>
			}
		/>
	);
}
