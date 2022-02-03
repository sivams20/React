import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super();

        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState(
            {count : this.state.count + 1},
            ()=>{
                console.log(this.state.count);
            }
        );
        //console.log(this.state.count); //this console will ouput one counter less than the actual one since setState is asynchronous function
    
        //this.setState(prevState =>({count: prevState.count + 1})); Another way to setState
    }

    render(){
        return(
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter;
