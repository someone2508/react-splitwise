import Button from "./Button";
import {useState} from 'react';


export default function FormAddFriend({handleAddFriend}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();

        if(!name || !image) return;

        let newUserObj = {
            id: Date.now(),
            name,
            image,
            balance: 0
        }

        handleAddFriend(newUserObj);

        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form onSubmit={handleSubmit} className="form-add-friend">
            <label>👫 Friend name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />

            <label>🌄 Image URL</label>
            <input value={image} onChange={(e) => setImage(e.target.value)} />

            <Button>Add</Button>
        </form>
    );
}