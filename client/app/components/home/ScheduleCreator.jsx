import Dropdown from "./Dropdown.jsx";
import { RiBookFill, RiCalendarFill, RiChat2Fill, RiSchoolFill } from "react-icons/ri";
import config from "../../config/config.json";
import { useState } from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import FileUpload from "./Transcript.jsx";

export default function ScheduleCreator() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [value, setValue] = useState("");

    const toggleDropdown = (id) => {
        setOpenDropdown((prev) => (prev === id ? null : id));
    };

    const handleClick = () => {
        alert('Button clicked!');
    };

    const handleFileUpload = (file) => {
        console.log("Selected file:", file);
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
            <FileUpload
                label="Choose a file to upload" onFileSelect={handleFileUpload}
            />
            <Input
                id="request"
                type="text"
                label="Additional Info"
                name="Request"
                placeholder="Enter here"
                icon={<RiChat2Fill />}
                value={value}
                onChange={setValue}
                required
            />
            <div className="flex justify-center pt-6">
                <Button
                    label="Plan of Study"
                    onClick={handleClick}
                    className="bg-blue-500 hover:bg-blue-600"
                />
            </div>
        </div>
    )
}