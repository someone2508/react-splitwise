import './App.css';
import {useState} from "react";
import {initialUsers} from './utils/users';
import FreindList from './components/FriendsList';
import FormSplitBill from './components/FormSplitBill';
import Button from './components/Button';
import FormAddFriend from './components/FormAddFriend';


function App() {
  const [friends, setFriends] = useState(initialUsers);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);

  console.log(friends);

  // add a new friend
  function handleAddFriend(friend) {
    setFriends((currFriends) => [...currFriends, friend]);
    setShowAddFriend(false);
  }

  // toogle showAddFriend
  function toggleShowAddFriend() {
    setShowAddFriend((curr) => !curr);
  }

  // handle the current selected friend
  function handleFriendSelection(friend) {
    // if no friend is selected or a different is friend is selected
      // ill just updated selected friend with new friend detail.
    // if same friend is alreadt selected
      // ill set selectedFriend as null
    setSelectedFriend((curr) => curr?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  // update closing balance
  function updateClosingBalance(value) {
    setFriends((friends) => 
      friends.map((friend) => 
        friend.id === selectedFriend.id ? 
        {...friend, balance: friend.balance + value} : 
        friend
      )
    );

    setSelectedFriend(null);
  }


  return (
    <div className='app'>
      <div className='sidebar'>
        {/* friend listing */}
        <FreindList friends={friends} selectedFriend={selectedFriend} handleFriendSelection={handleFriendSelection} />
        
        {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}

        <Button onClickFunc={toggleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</Button>
      </div>

      {/* add a new transaction detail */}
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} updateClosingBalance={updateClosingBalance} />}

      {/* add a new friend */}
    </div>
  );
}

export default App;
