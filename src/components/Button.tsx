interface props {
    text: string;
    onClick: () => void;
}

export default function Button({ text, onClick }: props) {
    return (
        <button
            className="btn btn-primary btn-lg btn-block"
            type="button"
            onClick={onClick}
        >
            {text}
        </button>
    );
}
