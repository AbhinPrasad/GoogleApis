export const loginFailed = async (req, res) => {
	res.status(401).json({ message: "Login Failure" });
};

export const loginSuccess = async (req, res) => {
	if (req.user) {
		res.status(200).json({ message: "Successfully loged in" });
	} else {
		res.status(403).json({ message: "Not Authorized" });
	}
};

export const logout = async (req, res) => {
	req.logout();
	res.redirect(process.env.CLIENT_URL);
};
