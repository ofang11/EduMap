import { useState } from "react";
import Center from "../Center.jsx";

export default function FileUpload({ icon, label = "Upload a file", onFileSelect }) {
    const [fileName, setFileName] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            if (onFileSelect) onFileSelect(file); // Pass the selected file to the parent component
        }
    };

    return (
        <div className="flex flex-col items-center space-y-2">
            <label className="w-full max-w-md flex flex-col items-center px-4 py-6 bg-gray-100 text-blue-500 rounded-lg shadow-md tracking-wide uppercase border border-blue-300 cursor-pointer hover:bg-blue-50 hover:text-blue-600">
                <span>{label}</span>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
            {fileName && (
                <p className="text-sm text-gray-600">
                    Selected file: <span className="font-medium">{fileName}</span>
                </p>
            )}
        </div>
    );
}