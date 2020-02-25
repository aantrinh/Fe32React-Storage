import React, { Component } from 'react'

export default class Event extends Component {

    handleShowMessage =(message)=>{
        alert(message);
    }
    render() {
        let message = 'Hello CyberSoft';
        return (
            <div className="container">
                <button className="btn btn-danger" onClick={()=>this.handleShowMessage(message)}>Show message</button>
            </div>
        )
    }
}
