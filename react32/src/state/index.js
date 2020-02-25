import React, { Component } from "react";

export default class State extends Component {
    // username = "HoaiAN";
    // isLogin = false;
    constructor(props) {
        super(props);

        this.state = {
            username: "HoaiAN",
            isLogin: false
        };
    }

    // neu nhu State thay doi thi ham render se chay lai

    renderInfor = () => {
        //     if (this.state.isLogin) {
        //         return <div> Hello {this.state.username}</div>;
        //     }
        //     return <button className="btn btn-success" onClick={this.handleLogin}>Login</button>;
        // }
        // handleLogin = () => {
        //     // console.log(321654);
        //     // this.isLogin = true;
        //     // console.log(this.isLogin);
        //     this.setState({
        //         isLogin: true
        //     });

        //cach 2
        return this.state.isLogin ? (
            <div> Hello {this.state.username}</div>
        ) : (
                <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
            );
    };
    handleLogin = () => {
        // console.log(321654);
        // this.isLogin = true;
        // console.log(this.isLogin);
        this.setState({
            isLogin: true
        });
    }
x
    render() {
        console.log("render");
        return (
            <div>
                <h3 className="title">* State</h3>
                {this.renderInfor()}
            </div>

        );
    }
}