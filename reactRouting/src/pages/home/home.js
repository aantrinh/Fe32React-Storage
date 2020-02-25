import React, { Component } from 'react'

export default class Home extends Component {
    componentWillUnmount(){
        //chuc nang la "destroy" component truoc do,khong muon cho no chay ngam 
        console.log("componentWillUnmount");
    }
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}
