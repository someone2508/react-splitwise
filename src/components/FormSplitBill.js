import {useState} from 'react';
import Button from './Button';



export default function FormSplitBill({ selectedFriend, updateClosingBalance }) {
    const [bill, setBill] = useState("");
    const [yourExp, setYourExp] = useState("");
    // state that manages a string
    const [whoIsPaying, setWhoIsPaying] = useState("user");
    // state derived value
    const friendExp = bill ? bill - yourExp : "";

    function handleSubmit(e) {
        e.preventDefault();

        if(!bill || !friendExp) return;
        
        let amount = whoIsPaying === "user" ? friendExp : -yourExp;
        updateClosingBalance(amount);
    }


    return <form className='form-split-bill' onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        
        <label>💰 Bill value</label>
        <input type="text" value={bill} onChange={(e) => setBill(e.target.value)} />

        <label>🧍‍♀️ Your expense</label>
        <input type="text" value={yourExp} onChange={(e) => setYourExp(e.target.value)} />

        <label>👫 {selectedFriend.name}'s expense</label>
        <input type="text" value={friendExp} />

        <label>🤑 Who is paying the bill</label>
        
        <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value={"user"}>You</option>
            <option value={"friend"}>{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
    </form>;
}