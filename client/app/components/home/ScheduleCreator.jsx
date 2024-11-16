import Dropdown from "./Dropdown.jsx";
import {RiBookFill, RiCalendarFill, RiChat2Fill, RiSchoolFill} from "react-icons/ri";
import config from "../../config/config.json";
import {useState} from "react";
import Input from "./Input.jsx";

export default function ScheduleCreator() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [value, setValue] = useState("");

    const toggleDropdown = (id) => {
        setOpenDropdown((prev) => (prev === id ? null : id));
    };
    return (
        <div>
            <Dropdown
                defOption="Select a college"
                list={config.colleges}
                label="School"
                icon={<RiSchoolFill />}
            />
            <Dropdown
                defOption="Select a major"
                list={config.majors}
                label="Major"
                icon={<RiBookFill />}
            />
            <Dropdown
                defOption="Select a number"
                list={[1, 2, 3, 4, 5, 6, 7, 8]}
                label="Semesters Left"
                icon={<RiCalendarFill />}
            />
            <Input
                id="request"
                type="text"
                label="Prompt"
                name="Request"
                placeholder="Enter here"
                icon={<RiChat2Fill />}
                value={value}
                onChange={setValue}
                required
            />
        </div>
    )
}