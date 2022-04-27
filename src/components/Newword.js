import React, {useState, useEffect} from "react";
import axios from "axios";

function Newword() {

  
  const [loading, setLoading] = useState(false);
  const [word, setWord] = useState([]);

  // fetch(`https://random-words-api.vercel.app/word`)
  // .then(response=>response.json())
  // .then(data=>console.log(data))

  useEffect(() => {
    const loadRandomWord = async () => {

        // Till the data is fetch using API 
        // the Loading page will show.
        setLoading(true);

        // Await make wait until that 
        // promise settles and return its result
        const response = await axios.get(
        "https://random-words-api.vercel.app/word");

        // After fetching data stored it in posts state.
        setWord(response.data);

        // Closed the loading page
        setLoading(false);
    }

    // Call the function
    loadRandomWord();
}, []);

  return ( 
    <>
      {/* {loading ? (
                    <h4>Loading...</h4>) :
                    (posts.map((item) =>
                        // Presently we only fetch 
                        // title from the API 
                        <h4>{item.title}</h4>)
                    )
                } */}

                {loading? (<h4>Loading new word...</h4>) : (<h4>word</h4>)}
    </>
   );
}

export default Newword;