import React, { Component } from "react";


export default class RenderingElements extends Component {
    name = "Hoai AN";
    class = "fe32";

    renderInfor =()=>{
        return (
            <div>
                ho ten: {this.name} - lop: {this.class}
            </div>
        );
    }

    render() {
        return (
            <div>
                <h3 className="title">* RenderingElements</h3>
                <div>Name: {this.name}</div>
                <div>class: {this.class}</div>
                {this.renderInfor()}

            </div>
        );
    }
}