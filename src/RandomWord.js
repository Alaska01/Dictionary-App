import React, { useEffect, useState } from "react";

function RandomWord() {


const [instantword, setInstantword] = useState([]);

  const dataApi = async () => {
    const data = await fetch(
      `https://random-words-api.vercel.app/word`
    );
    const random_word = await data.json();
    setInstantword(random_word);
      console.log(random_word)
  };
  
  useEffect(() => {
    dataApi();
  }, []);

console.log(instantword)
  return ( 
    <div>
      <h1>Hello</h1>
       <h1>{instantword[0].word} </h1>
    </div>
   );
}

export default RandomWord;