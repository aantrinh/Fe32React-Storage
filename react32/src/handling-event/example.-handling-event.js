import React, {Component} from "react";

export default class ExampleHandlingEvent extends Component{
    username = "HoaiAN";
    isLogin = false;

    renderInfor =()=>{
        if(this.isLogin){
        return <div> Hello {this.username}</div>;
        }
        return <button className="btn btn-success" onClick={this.handleLogin}>Login</button>;
    }
    handleLogin =()=>{
        // console.log(321654);
        this.isLogin=true;
        console.log(this.isLogin);
    }
    render(){
        return(
            <div>
                <h3 className="title">ExampleHandlingEvent</h3>
                {this.renderInfor()}
            </div>
            
        );
    }
}