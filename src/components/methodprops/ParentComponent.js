import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component{
    constructor(){
        super();
    }

    greetParent(message){
        alert(`Hello Parent ${message}`);
    }

    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent;