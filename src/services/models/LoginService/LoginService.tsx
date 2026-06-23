import axiosInstance from "../../commom/axiosInstance";

class LoginService {
	async logarUsuario(username: string, password: string) {
		const response = await axiosInstance.post("/login/", {
			username,
			password,
		});

		localStorage.setItem("access", response.data.access);
		localStorage.setItem("refresh", response.data.refresh);

		console.log(localStorage.getItem("access"));
		console.log(localStorage.getItem("refresh"));

		return response.data;
	}
}

export default new LoginService();
