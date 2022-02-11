import React, {Component} from "react";
import PureComp from "./pureComp";
import RegularComp from "./regularComp";


class ParentComp extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: 'sivam'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({name: 'sivam'})
        }, 2000)
    }

    render(){
        console.log("*****************Parent Component Render*****************");
        return(
            <div>
                <PureComp name={this.state.name}/>
                <RegularComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp;
