import React, {useState, useEffect} from "react";
import axios from "axios";

function Search() {

  const [searchword, setSearchword] = useState([])
  const [searching, setSearching] = useState('')

  

    useEffect(()=>{

      // https://api.dictionaryapi.dev/api/v2/entries/en/<word>
      axios.get(`https://api.datamuse.com/sug?s=${searching}`)
      .then(response => {
        setSearchword(response.data)
        // console.log(response.data)
      })
      .catch(error => error.message)
    
      }, [searching])

     
        console.log(searchword)
      
  // function searchSuggestion(search){

  // }

  return ( 
    <>
      <form>
      <label>
        Enter Search Word: 
          <input type="text" value={searching} onChange={(e)=>{setSearching(e.target.value)}}/>
          <input type="submit" value="Click"/>
      </label>
      {/* {searchSuggestion(search)} */}
      </form>
    </>
   );
}

export default Search;