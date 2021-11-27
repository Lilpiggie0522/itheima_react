import react from "react";

// class Event extends react.Component{
//     handleClick(){
//         document.getElementsByTagName("button")[0].style.color = "red";
//         console.log("Click event triggered")
//     }

//     render(){
//         return(
//             <button onClick={this.handleClick}>Click here</button>
//         )
//     }
// }

function Event(){
    function handleClick(){
        document.getElementsByTagName("button")[0].style.color = "red";
        console.log("Click by function components triggered!")
    }
    return(
        <button onClick={handleClick}>click here!</button>
    )
}

export default Event