import { useState } from "react";

function App() {

  const [name, setName] = useState ("Mehmet");
  const [age, setAge] = useState (23);
  const [friends, setFriends] = useState (["Ali","Ahmet"]);
  const [address, setAddress] = useState ({ title: "istanbul", zip: 34200});

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

    <br></br> <br></br>
    <hr></hr>

    <h2>Adress</h2>
    <div>
      {address.title} {address.zip}
      <br></br>
      <button onClick={() => setAddress({...address , title:"Ankara" , zip:"06200"})}>Change The Adress</button>
      {/*...address kullanılmadan zip verilmeseydi title ankara oluyor zip bilgisi verilmiyor ama 
      bu durumda hiç bir bilgi vermesek bile default bilgiyi alıyor ne verilmişse onu değiştiriyor*/}
    </div>
  </div>

  );
}

export default App;