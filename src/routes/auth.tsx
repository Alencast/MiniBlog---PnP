export function isAuthenticated() {
	const accessToken = localStorage.getItem("access");

	if (accessToken) {
		return true;
	}
	return false;
}
