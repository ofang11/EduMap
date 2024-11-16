import {Children} from "react";

export default function Center({children}) {
    return (
        <div className="flex justify-center items-center">
            {children}
        </div>
    );
}

export function TotalCenter({children}) {
    return (
        <div className="grid h-full w-full items-center justify-center">
            {children}
        </div>
    );
}

export function CenterAll({children}) {
    return (
        <div className="flex flex-col justify-center items-center space-y-1">
            {Children.map(children, (child) => (
                <Center>
                    {child}
                </Center>
            ))}
        </div>
    );
}