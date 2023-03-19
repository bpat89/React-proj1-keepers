import React from "react";
import ReactDOM from "react-dom";

function Year (){
    const currentdate = new Date()
const currentyear = currentdate.getFullYear();
    return(
      <footer>
            <p> Copyright by Patrick {currentyear}</p>
        </footer>
         )
        
}

export default Year;