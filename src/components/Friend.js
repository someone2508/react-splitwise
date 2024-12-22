import Button from "./Button";

export default function Friend({freind, selectedFriend, handleFriendSelection}) {
    const isSelected = freind.id === selectedFriend?.id;

    return (
        <li>
            <img src={freind.image} alt={freind.name} />
            <h3>{freind.name}</h3>

            {
                freind.balance < 0 && (
                    <p className="red">
                        You owe {freind.name} {Math.abs(freind.balance)} rs.
                    </p>
                )
            }

            {
                freind.balance > 0 && (
                    <p className="green">
                        {freind.name} owes you {Math.abs(freind.balance)} rs.
                    </p>
                )
            }

            {freind.balance == 0 && <p>You and {freind.name} are even.</p>}

            <Button onClickFunc={() => handleFriendSelection(freind)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    );
}