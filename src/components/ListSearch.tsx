import { useState } from "react";
import ListGroup from "./ListGroup";
import Search from "./SearchBox";

export default function ListSearch() {
    const [searchKey, setItemsVisibility] = useState("");
    const items = [
        "Apple",
        "Bananana",
        "Mango",
        "Grapes",
        "Strawberry",
        "Orange",
        "Pineapple",
    ].filter((item) =>
        item.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
    );

    return (
        <>
            <Search onSearch={setItemsVisibility} />
            <ListGroup items={items} heading="Fruits" />
        </>
    );
}
