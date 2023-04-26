import React, { useState } from "react";
import { FaGoogleDrive } from "react-icons/fa";
import { uploadFile } from "../api/apis";

const FileUpload = () => {
	const [file, setFile] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", file);
		uploadFile(formData)
			.then((res) => console.log(res, "response"))
			.catch((err) => console.log(err, "error"));
	};

	return (
		<div className="fileUpload">
			<form
				className="form"
				onSubmit={handleSubmit}
				encType="multipart/form-data">
				<span className="form-title">Upload your file</span>
				<p className="form-paragraph">Maximum size 50 mb</p>
				<label htmlFor="file-input" className="drop-container">
					<span className="drop-title">Drop files here</span>
					or
					<input
						type="file"
						id="file-input"
						name="file"
						onChange={(e) => {
							setFile(e.target.files[0]);
						}}
					/>
				</label>
				<button className="btn">
					<FaGoogleDrive /> Upload to Drive
				</button>
			</form>
		</div>
	);
};

export default FileUpload;
