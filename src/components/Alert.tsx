interface props {
    onClose: () => void;
}

export default function Alert({ onClose }: props) {
    return (
        <div
            className= "alert alert-warning alert-dismissible fade show"
            role="alert"
        >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
                type="button"
                onClick={onClose}
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>
    );
}
