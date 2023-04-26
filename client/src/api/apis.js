import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API = axios.create({ baseURL: BASE_URL });

export const googleLogin = async () => {
	const response = await API.get("/auth/google");
	console.log(response);
};
