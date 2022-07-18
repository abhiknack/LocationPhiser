import './App.css';
import React from 'react';
import { useState } from 'react';
import { addDoc, collection} from "firebase/firestore";
import { db } from "./firebase-config";
function App() {

 
  const [longitude,setLongitude] =useState("");
  const [latitude,setLatitude] = useState("");

   
  
    const postsCollectionRef = collection(db,"location");
    const getLoc = async () => { 
      navigator.geolocation.getCurrentPosition(function(position) {
        setLongitude(position.coords.latitude);
        setLatitude(position.coords.longitude);
      });
      console.log("abhi is legend");
      //await addDoc(postsCollectionRef,{latitude , longitude})
    }
    getLoc();
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png" className={"App-logo"}></img>
        <button onClick={getLoc} className={"Button"}>Next</button>
      </header>
    </div>
  );
}

export default App;
