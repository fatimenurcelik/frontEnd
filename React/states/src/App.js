import { useState } from "react";

function App() {

  const [name, setName] = useState ("Mehmet");
  const [age, setAge] = useState (23);
  const [friends, setFriends] = useState (["Ali","Ahmet"]);

  return (
  <div className="container">
    <br></br>
   <h2> Merhaba {name}</h2>
   <h3> {age}</h3>

   <button onClick={() => setName("Ahmet")}>Change Name</button>
   <span>  </span>
   <button onClick={() => setAge(18)}>Change Age</button>

   <br></br> <br></br>
   <hr></hr>

    <h2>Friends</h2>
    {friends.map((friend ,index) =>(
      <div key={index}>{friend} </div>
    ))}
    <button onClick={() => setFriends([... friends, "Ayse"])}>Add Friend</button>

  </div>

  );
}

export default App;