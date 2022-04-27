import React from "react";
// import Testrun from "./Testrun";
import Newword from './Newword'
import Search from "./Search";

function Bodycontainer() {
  return ( 
    <>
      {/* <h1>Here is the Body of the App</h1> */}
      <Newword />
      <Search />
    </>
   );
}

export default Bodycontainer;