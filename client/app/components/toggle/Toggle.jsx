import React from "react";

export default function Toggle({ state, text}) {
    return (
        <div
            className={`
                flex 
                items-center 
                justify-center 
                w-1/2 
                h-full 
                font-bold 
                uppercase
                transition-all 
                tracking-wider
                font-gurajada
                duration-300 
                rounded-full 
                ${state ? "bg-orange-100 text-orange-600" : "text-gray-600"}`
            }
        >
            {text}
        </div>
    );
}