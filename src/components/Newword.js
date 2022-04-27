import React, {useState} from "react";

function Newword() {

  const [word, setWord] = useState('')
  fetch(`https://random-words-api.vercel.app/word`)
  .then(response=>response.json())
  .then(data=>console.log(data))
  return ( 
    <>
      <h1> New Display</h1>
    </>
   );
}

export default Newword;