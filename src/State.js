import react from "react";


class State extends react.Component{
   
    // constructor(){
    //     super();
    //     this.handleClick = this.handleClick.bind(this)
    //     this.state = {
    //         count: 10,
    //     }
    //     }
    constructor(){
        super()
        this.state = {
            count: 10,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    // state = {
    //     count: 10,
    // }
    
    handleClick=()=>{
        this.setState(
            {count: this.state.count+1}
        )
        console.log(this)
    }

    render(){
       
        return(
            <div>
                <h1 onClick={this.handleClick}>counter: {this.state.count}</h1>
                {/* <button onClick={() => {
                    this.setState({count: this.state.count +=1})
                    }
                }>+1</button> */}
                <button onClick={() =>{this.handleClick()}
                }>+1</button>
            </div>
        )
    }

}
export default State;