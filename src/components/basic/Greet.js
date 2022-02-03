import React from "react";

// function Greet(){
//     return <h1>Hello Balu</h1>
// }

const Greet = (props) => 
{
    const {name, role} = props;
    return (
        <div>
            <h1>Hello {name} is a {role}</h1>
            {props.children}
        </div>
    )
}

export default Greet;
