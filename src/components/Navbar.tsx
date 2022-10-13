import { Link } from "react-router-dom";

const links = [
    { path: "/", name: "Calculator" },
    { path: "/length-unit-converter", name: "Length unit converter" },
    { path: "/area-unit-converter", name: "Area unit converter" },
    { path: "/volume-unit-converter", name: "Volume unit converter" },
    { path: "/force-unit-converter", name: "Force unit converter" },
];

export const Navbar = () => {
    return (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {links.map(({ path, name }, index) => (
                <li key={index}>
                    <Link
                        className="text-[1.6rem] bg-[#242440] rounded-2xl py-4 w-full flex justify-center hover:bg-[#2e2e51]"
                        to={path}
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
