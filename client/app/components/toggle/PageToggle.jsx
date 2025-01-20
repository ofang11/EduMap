import React, { useState } from "react";
import ScheduleCreator from "../home/ScheduleCreator.jsx";
import Toggle from "./Toggle.jsx";

export default function PageToggle() {
    const [active, setActive] = useState(true);
    const toggleState = () => {
        setActive(!active);
    };

    return (
        <div>
            <div onClick={toggleState}
                className="flex items-center bg-gray-200 rounded-full shadow-lg p-1 mt-1 mb-4 h-10 w-full">
                <Toggle state={active} text="Create Schedule" />
                {/* <Toggle state={!active} text="View Career Paths" /> */}
            </div>
            {active ? <ScheduleCreator /> : <></>}
        </div>
    );
};
