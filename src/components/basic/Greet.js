import React from "react";

// function Greet(){
//     return <h1>Hello Balu</h1>
// }

const Greet = (props) => 
{
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} is a {props.role}</h1>
            {props.children}
        </div>
    )
}

export default Greet;