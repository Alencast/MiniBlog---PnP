import axios from "axios";

export const axiosPublic = axios.create({
	baseURL: "http://127.0.0.1:8000/",
});
const axiosInstance = axios.create({
	baseURL: "http://127.0.0.1:8000/",
	// headers: {
	// 	"Content-Type": "application/json",
	// },
});

axiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem("access");
	console.log("TOKEN:", token);

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	console.log("AUTH:", config.headers.Authorization);

	return config;
});

export default axiosInstance;
