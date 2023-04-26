export const isLoggedIn = (req, res, next) => {
	req.user ? next() : res.status(403).json({ message: "Not Authorized" });
};
