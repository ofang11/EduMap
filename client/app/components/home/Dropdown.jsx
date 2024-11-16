import {useState} from "react";
import Center from "../Center.jsx";

export default function Dropdown({ defOption, list, icon, label }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defOption);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const select = (key) => {
        setSelected(key);
        setIsOpen(false);
    };

    return (
        <div className="grid w-full mb-2">
            <div className="text-[#e64833] inline-flex items-center px-1">
                {icon}
                <label className="ml-1 font-gurajada font-bold tracking-wide uppercase">{label}</label>
            </div>
            <Center>
                <button
                    onClick={toggleDropdown}
                    className="w-[595px] px-4 py-2 text-left bg-gray-200 font-helvetica text-sm rounded-lg shadow-md"
                >
                    {selected}
                    <span className="float-right"> {isOpen ? "▲" : "▼"}</span>
                </button>
            </Center>

            {isOpen && (
                <Center>
                    <ul className="absolute overflow-scroll translate-y-16 w-[595px] h-[120px] text-sm mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {list.map((key, index) => (
                            <li
                                key={index}
                                onClick={() => select(key)}
                                className="px-4 py-2 hover:bg-gray-100"
                            >
                                {key}
                            </li>
                        ))}
                    </ul>
                </Center>
            )}
        </div>
    );
};