// create your App component here
import React,{ useEffect, useState} from "react";


function App(){
const [isDogImage, setIsDogImage] = useState(null);



useEffect(() =>{
    fetch("https://dog.ceo/api/breeds/image/random")
   .then((res) => res.json())
   .then((data) => {
    setIsDogImage(data.message);
   });
}, []);


if(!isDogImage)
    return <p>Loading...</p>

    return(
        <div>
            <img src={isDogImage} alt="A Random Dog" />
        </div>
    )
};

export default App;
