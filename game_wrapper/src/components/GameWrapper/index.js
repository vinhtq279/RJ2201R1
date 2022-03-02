import React, { useState } from 'react';
import HideMe from '../HideMe';

function GameWrapper(){
    const [isChildComponentHidden, setIsChildComponentHidden] = useState(0);
    let _text = "";
    let btnString = "";
    function toggleShow(){
        if (isChildComponentHidden == 0){
            setIsChildComponentHidden(1);
            _text = "show";
            console.log(_text);
        }
        else {
            setIsChildComponentHidden(0);
            _text = "hidden";
            console.log(_text);
        }
    }
    _text =  isChildComponentHidden == 0 ? "show" : "hidden";
    if (_text == "show"){
        btnString = 'Click here to hidden';
    }
    else{
        btnString = 'Click here to show';
    }
    return(
        <>
        <button onClick={toggleShow}>Click here to {_text} child component</button>
        <h3><HideMe text={_text} isShown={isChildComponentHidden}/></h3>
        </>
    )
}

export default GameWrapper;
