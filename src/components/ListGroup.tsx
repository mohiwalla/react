import { useState } from "react";

interface listArgs {
    items: string[];
    heading: string;
    searchKey: string;
}

export default function ListGroup({ items, heading, searchKey }: listArgs) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && (
                <h3 className="user-select-none">
                    The list is empty ¯\_(ツ)_/¯
                </h3>
            )}
            <ul className="list-group w-25">
                {items.map((item: string, index: number) => {
                    const toBeDisplayed: boolean = item.includes(searchKey);
                    return (
                        toBeDisplayed && (
                            <li
                                onClick={() => {
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
                        )
                    );
                })}
            </ul>
        </>
    );
};