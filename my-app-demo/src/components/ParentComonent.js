import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component {
    constructor(props){
        super(props);
        this.greatParent = this.greetParent.bind(this);
        this.state = {
            parentName: 'Parent'
        }
    }
    greetParent(){
        console.log(`Hello ${this.state.parentName} !`);
    }
    render(){
        return (
            <div>
                <ChildComponent greetHandler={this.greatParent} />
            </div>
        );
    }
}

export default ParentComponent;