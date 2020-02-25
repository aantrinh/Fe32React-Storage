import React, { Component } from 'react'

export default class DemoIf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            userName: ''
        }
    }

    // renderContent = () =>{
    //     if(this.isLogin){
    //         return(
    //             <div>
    //                 Hello AN <button>Logout</button>
    //             </div>
    //         )
    //     }

    //     return(<div>
    //         <button>Login</button>
    //     </div>)
    // }

    login = () => {
        this.setState({
            isLogin : true,
            userName : 'Hoai An'
        }, () => {
            console.log(this.state)
        })
    }
    logout = () => {
        this.setState({
            isLogin : false,
            userName : ''
        }, () => {
            console.log(this.state)
        })
    }

    //phuong thuc cua component demoif
    render() {
        return (
            <div>
                {/* {this.renderContent()} */}
                {this.state.isLogin ? <div> Hello {this.userName} Cybersoft ! <button onClick={this.logout}>Logout</button> </div> : <button
                    onClick={this.login}>Login</button>}
            </div>
        )
    }
}
