import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { FileUpload, GoogleLogin, LoginFailed } from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<GoogleLogin />} />
				<Route path="/upload" element={<FileUpload />} />
				<Route path="/loginfailed" element={<LoginFailed />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
