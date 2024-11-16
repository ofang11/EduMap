import config from "../../config/config.json";

export default function Introduction() {
    return (
        <div className="font-playfair py-5">
            <h1 className="text-black font-bold pb-2 text-4xl">{config.slogan}</h1>
            <p className="text-black text-[14px]">{config.intro}</p>
        </div>
    );
}