import { useState } from "react";
import Center from "../Center.jsx";

export default function Button({ label, onClick, type = "button", className = "" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
        >
            {label}
        </button>
    );
};