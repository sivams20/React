import React, { useEffect, useState } from "react";

function HookEffectCounter(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `Cliked ${count} times`;
    })
    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookEffectCounter;
