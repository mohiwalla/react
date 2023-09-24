import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Search from "./components/Search";

export default function App() {
    const items = [ 'Apple', 'Bananana', 'Mango', 'Grapes', 'Strawberry', 'Orange', 'Pineapple' ];
    const [searchKey, setItemsVisibility] = useState('');
    return (
        <>
            <Search onSearch={setItemsVisibility} />
            <ListGroup items={items} heading="Fruits" searchKey={searchKey} />
        </>
    );
}
