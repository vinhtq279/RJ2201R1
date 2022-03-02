import React, { useEffect, useState } from 'react';

function HideMe(props){
    
    let text = props.text;
    let isShown = props.isShown;
    //console.log(isShown);
    useEffect(() => {
        if (isShown == 1){
            //setText("hidden");
            console.log("isShow = " + 1);
            alert ("Child component is shown now!");
        }
        else if (isShown == 0){
            //setText("show");
            console.log("isShow = " + 0);
            alert ("Child component was hidden!");
        }
        else {
            //alert('Value of isShown state is invalid or undefined');
            //console.log(isShown);
        }
    },[isShown]);
    
    if (isShown == 1){
        return (<>{text}</>);
    }
    else{
        return(<></>);
    }
}

export default HideMe;