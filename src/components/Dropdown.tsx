import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";

type DropdownProps = {
    title: string;
    content: string | string[];
};

export default function Dropdown({ title, content }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown ${isOpen ? "open" : ""}`} ref={dropdownRef}>
            <button className="dropdown-title" onClick={toggleDropdown}>
                {title}
                {isOpen ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
            </button>
            <div className="dropdown-content">
                {Array.isArray(content) ? (
                    <ul className="dropdown-equipements">
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
}
