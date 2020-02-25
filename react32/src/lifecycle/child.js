import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props);

        console.log("child constructor");
    }

    componentWillUnmount(){
        console.log("child componentWillUnmount")
    }
    componentDidMount(){
        console.log("child componentDidMount")
    }
    componentWillUpdate(){
         console.log("will child")
    }
    componentDidUpdate(){
         console.log("did child")
    }
    // componentWillMount va DidMount chi chay 1 lan duy nhat khi khoi tao
    componentWillReceiveProps(nextProps){
        console.log("Child componentWillReceiveProps", nextProps);
    }
    render() {
        return (
            <div> child Component  </div>
        )
    }
}
