import React, { Component } from "react";

function ChildComponent (props){
    return(
        <div>
            <button onClick={props.greetHandler}>Click & View Console</button>
        </div>
    );
}

export default ChildComponent;