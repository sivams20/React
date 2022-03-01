import React, { useState } from "react";
import MouseHoverHook from "./MouseHoverHook";

function MouseHoverContainer(){
    const [display, setDisplay] = useState(true);
    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <MouseHoverHook/>}
        </div>
    )
}

export default MouseHoverContainer;
