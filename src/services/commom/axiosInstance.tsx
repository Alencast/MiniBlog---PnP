import axios from "axios";

const configuredApiUrl =
	import.meta.env.VITE_API_URL ?? "/api/";
const apiBaseUrl = configuredApiUrl.replace(/^http:\/\//, "https://");

export const axiosPublic = axios.create({
	baseURL: apiBaseUrl,
});
const axiosInstance = axios.create({
	baseURL: apiBaseUrl,
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
