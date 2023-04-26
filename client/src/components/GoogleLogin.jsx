import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
	const handleClick = () => {
		window.open(
			`${import.meta.env.VITE_BASE_URL}/auth/google/callback`,
			"_self"
		);
	};

	return (
		<div className="login">
			<button className="loginButton" onClick={handleClick}>
				<FcGoogle />
				Login with Google
			</button>
		</div>
	);
};

export default GoogleLogin;
