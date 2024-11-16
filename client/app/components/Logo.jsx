import config from "../config/config.json";
import logo from "../assets/logo-yellow.png";
import {Link} from "@remix-run/react";

export default function Logo() {
    return (
        <Link to="/" className="mt-1">
            <div className="inline-flex items-center tracking-widest">
                <img className="w-8 h-auto" alt="Logo" src={logo}/>
                <h1 className="pl-1 text-[#fdcd07] font-gurajada uppercase tracking-widest text-xl">
                    {config.name}
                </h1>
            </div>
        </Link>
    );
}