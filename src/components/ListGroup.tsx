import { useState } from "react";

interface listArgs {
    items: string[];
    heading: string;
}

export default function ListGroup({ items, heading }: listArgs) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1 className="text-danger">{heading}</h1>
            {items.length === 0 && <h3>No results found ¯\_(ツ)_/¯</h3>}
            <ul className="list-group w-25"></ul>
                {items.map((item: string, index: number) => {
                    return (
                        <li
                            onMouseDown={() => {
                                setSelectedIndex(index);
                            }}
                            style={{ cursor: "pointer" }}
                            key={item}
                            className={
                                "list-group-item border border-2" +
                                (index == selectedIndex ? " active" : "")
                            }
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
