import React from "react";

function Events_Objects(){
    function handleClick(e){
        e.preventDefault();
        console.log(e.target.href);
    }
    return(
        <a href="https://www.google.com" onClick={handleClick}>Click here</a>
    )
}

export default Events_Objects