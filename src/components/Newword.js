import React, { useState, useEffect } from "react";
import axios from "axios";

function Newword() {

    const [word2, setWord] = useState([]);

  useEffect(()=>{


  axios.get(`https://random-words-api.vercel.app/word`)
  .then(response => {
    setWord(response.data)
    // console.log(response.data)
  })
  .catch(error => error.message)

  }, [])

  // function trial(){

  // }

  // console.log(word2)
  return ( <>
        <div>
          {
          (word2.length > 0) && (<h1>{word2[0].word}</h1>)
            
          }
          
        </div>

          </> );
}

export default Newword;