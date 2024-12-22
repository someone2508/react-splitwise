export default function Button({children, onClickFunc}) {
    return (
        <button onClick={onClickFunc} className="button">
            {children}
        </button>
    );
}