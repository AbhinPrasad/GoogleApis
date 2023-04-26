export const isLoggedIn = (req, res, next) => {
	if (req.user) {
		next();
	} else {
		res.status(403).json({ message: "Not Authorized" });
	}
};

// req.user ? next() : res.status(403).json({ message: "Not Authorized" });
