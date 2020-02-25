import React, { Component } from "react";

export default class HandlingEvent extends Component {
    // constructor(props){
    //     super(props);
    //     this.handlingEvent = this.handlingEvent.blind(this);
    // }
    // name = "An"
    // handlingEvent(){
    //     // console.log(123);
    //     console.log(this.name);
    // }

    handlingEvent = () => {
        console.log(123);
    }

    handlingEventParams = (name, lop) => {
        console.log(name, lop);
    }
    render() {      
        return (
            <div>
                <h3>HandlingEvent</h3>
                <button className="btn btn-success" onClick={this.handlingEvent}>Handling event</button>

                <button className="btn btn-danger" onClick={() => { this.handlingEventParams("HoaiAN", "fe32") }}>HandlingEvent Params</button>

            </div>
        )
    }
}