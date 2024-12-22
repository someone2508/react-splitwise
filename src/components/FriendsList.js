import Friend from "./Friend";

export default function FreindList({friends, handleFriendSelection, selectedFriend}) {
    return (
        <ul>
            {friends.map(eFriend => {
                return <Friend freind={eFriend} selectedFriend={selectedFriend} handleFriendSelection={handleFriendSelection} />
            })}
        </ul>
    );
}