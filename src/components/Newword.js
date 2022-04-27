import React, { useState, useEffect } from "react";
import axios from "axios";

function Newword() {

    const [word, setWord] = useState([]);

  useEffect(()=>{


  axios.get(`https://random-words-api.vercel.app/word`)
  .then(response => {
    setWord(response.data)
    // console.log(response.data)
  })
  .catch(error => error.message)

  }, [])

  // You may wish to write a function here later tht checks for condition and error messages

  console.log(word)
  return ( <>
        <div> 
          {(word.length > 0) && (<h1>{word[0].word} means {word[0].definition} </h1>)} 
        </div>
        </> );
}

export default Newword;