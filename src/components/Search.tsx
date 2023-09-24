interface props {
    onSearch: (key: string) => void;
}

export default function Search({ onSearch }: props) {
    return (
        <input
            autoFocus
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            type="text"
            onInput={(e) => {
                onSearch(e.currentTarget.value);
            }}
        />
    );
}