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

// console.log(instantword)
  return ( 
    <div>
      <h3>Word of the day</h3>
       <h4><em>{instantword[0].word}</em>- definition: {instantword[0].definition} </h4>
    </div>
   );
}

export default RandomWord;