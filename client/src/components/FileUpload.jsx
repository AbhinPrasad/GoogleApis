import React from "react";
import { FaGoogleDrive } from "react-icons/fa";

const FileUpload = () => {
	return (
		<div className="fileUpload">
			<form className="form">
				<span className="form-title">Upload your file</span>
				<p className="form-paragraph">Maximum size 50 mb</p>
				<label htmlFor="file-input" className="drop-container">
					<span className="drop-title">Drop files here</span>
					or
					<input
						type="file"
						id="file-input"
                        name="file"
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
