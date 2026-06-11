import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../routes/auth";

export default function PrivateRoute() {
	return isAuthenticated() ? (
		<Outlet />
	) : (
		<Navigate
			to="/login"
			replace
		/>
	);
}
