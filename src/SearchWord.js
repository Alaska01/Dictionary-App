import React, {useEffect, useState} from "react";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { FcSpeaker } from "react-icons/fc";

function SearchWord() {

  const [searchword, setSearchword] = useState('');
  const [wordsearch, setWordsearch] = useState([]);
  const [worddefinition, setWorddefinition]=useState('definition');
  const [displayvalue, setDisplayvalue] =useState('block')
  const [wordexplanation, setWordexplanation] = useState('')

  const dataApiWord = async () => {
  
    const datum = await fetch(
      `https://api.datamuse.com/sug?s=${searchword}`
    );

    const search_word = await datum.json();
    setWordsearch(search_word);
    setDisplayvalue('block')
    
  };
 
  
  useEffect(() => {
    dataApiWord();
  }, [searchword]);


  function handleSelectedWord(e){
    e.preventDefault();

    setWorddefinition(e.target.innerHTML)
    setDisplayvalue("none")
  }

 

  function getMeaning(){
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`)
    .then(response=> {
      setWordexplanation(response.data)
      console.log(wordexplanation)
      
    }).catch((error)=>{
      console.log(error.message)
    })
  }

   const displayWordList = wordsearch.map((word, index, array)=>{return <h4 key={index} onClick={handleSelectedWord}>{word.word}</h4>})
  return ( 
    <>
      <h1>Free Dictionary</h1>
      <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchword(e.target.value);
            
          }}
        />

    <button
          onClick={() => {
            getMeaning();
          }}
        > <FaSearch size="20px" />
        </button>
        <div style={{display: `${displayvalue}` }}>{displayWordList }</div>

        <div>
          meaning and Definition
          <p>Examples:</p>
        </div>
    </>
   );
}

export default SearchWord;