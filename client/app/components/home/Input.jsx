import Center from "../Center.jsx";
import {RiSendPlane2Fill} from "react-icons/ri";

export default function Input(props) {
    return (
        <Center>
            <div className="grid items-center">
                <div className="text-[#e64833] inline-flex items-center px-1">
                    {props.icon}
                    <label htmlFor={props.id} className="ml-1 font-gurajada font-bold tracking-wide uppercase">{props.label}</label>
                </div>

                <input
                    className="p-4 mb-1 bg-[#FFFFFF] text-sm border-[#D4D4D4] shadow-lg border placeholder-[#2A2A2A] rounded-lg h-10 w-[595px]"
                    type={props.type}
                    id={props.id}
                    name={props.id}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    required={props.required}
                />
            </div>
        </Center>
    )
}